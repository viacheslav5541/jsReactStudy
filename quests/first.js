
const f = () => console.log('daa')

function curry(original, props) {
    this.latestPromise = null
    this.counter = 0


    promiseCreator = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (this.counter > 0) {
                    this.counter--;
                    if (props.waitForPrevious) {
                        original()
                        resolve(() => promiseCreator())
                    } else {
                        resolve(() => promiseCreator())
                        original()
                    }
                }
            }, props.delay)
        })
    }

    return () => {
        if (props.waitCopletion) {
            if (!latestPromise) { this.counter++; latestPromise = promiseCreator() }
            else {
                if (this.counter < props.max) { this.counter++; latestPromise = latestPromise.then(func => { return func() }) }
                else { console.log('nea') }
            }

        } else {
            if (this.counter < props.max) {
                this.counter++;
                return promiseCreator()
            } else console.log('nea')
        }

    }
}


const g = curry(f, { delay: 1000, max: 2, waitCopletion: true, waitForPrevious: true })


g()
g()
g()