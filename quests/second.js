const proxynator = (target) => {
    return new Proxy(target, {
        get(target, props, value) {
            if (props === 'toJSON') return () => target
            objecor = Object.defineProperty(target, props, { enumerable: true, configurable: true, writable: true })
            target[props] = {...Reflect.get(...arguments)}
            return proxynator(Reflect.get(...arguments))
        }
    })
}


keksoValue = proxynator({ x: 10 })
keksoValue.x.b.a= 2
keksoValue.x.d.r =2
keksoValue.x.d = 5
console.log(JSON.stringify(keksoValue))
