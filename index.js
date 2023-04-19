const receivesAFunction = (callback) => {
    return callback()
}

const addNumbers = (a,b) => {return a + b}
const returnsANamedFunction = () => {return addNumbers}

function returnsAnAnonymousFunction() {
    return (function() {  })
}