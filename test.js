const f = (a, b, c) => {
    // this === 'hello'
    console.log(a, b, c)
}

f(1, 2, 3)

f.call('hello', 1, 2, 3)

rf = f.bind('hello', 1, 2, 3)
rf()

rf = f.bind('hello', 1, 2)
rf(5)

