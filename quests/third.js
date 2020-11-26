const list = [1,1,3,1, 2,2,2, 3, 4, 5,6,7,6,7,8,8,8,8,8]

const getLazy = (obj) => {
    const iterator = typeof obj.next === 'function' ? obj : obj[Symbol.iterator]();
    console.log(obj)
    return new Proxy(
        obj,
        {
            get(_, prop) {
                switch (prop) {
                    case 'map':
                        return f => {
                            return getLazy(
                                {
                                    [Symbol.iterator]() { return this },
                                    index: 0,
                                    next() {
                                        const { value, done } = iterator.next()
                                        if (done) {
                                            return { done }
                                        } else {
                                            return { done, value: f(value, this.index++) }
                                        }
                                    }
                            }
                            )
                        }
                        break
                    case 'take':
                        return (count)=>{
                            return getLazy({
                                [Symbol.iterator](){return this},
                                count,
                                next(){
                                    return this.count-- ? iterator.next() : {done:true}
                                }
                            })
                        }
                        break
                    case 'filter':
                        return f => {
                            return getLazy({
                                [Symbol.iterator]() { return this },
                                index: 0,
                                next() {
                                    do {
                                        var { done, value } = iterator.next()
                                    } while (!done && !f(value))
                                    return { done, value }
                                }
                            })
                        }
                    default:
                        return Reflect.get(...arguments)
                }
            }
}
)

}



console.log(
    ...getLazy(list)
        .map(x => x + 12)
        .map(x=>x+12)
        .map(x => {
          if (x == 4) {
            throw 'oops'
          } else return x
        })
        .take(3)
        .filter(x=>x>13)
)
