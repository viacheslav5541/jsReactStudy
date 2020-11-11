
const proxynator = (target) => {
    return new Proxy(target, {
        set(target, props, value) {
            console.log('set', target, props, value)
            target[props] = value;
        },
        get(target, props, value) {
            console.log('get', target, props, value)
            console.log(target[props])
            if (props === 'toJSON') return () => target
            if (!target[props]) {
                objecor = Object.defineProperty(target, props, { enumerable: true, configurable: true, writable: true })
                target[props] = {}
                return proxynator(target[props])
            } else return value
        }
    })
}


keksoValue = proxynator({ x: 10 })
keksoValue.a.c = 2
console.log(JSON.stringify(keksoValue))
