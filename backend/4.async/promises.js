/*
const promises = new Promise((res, rej) => {
    if(false) res('resolved');
    else rej();
});

promises.then(() => {console.log('Passed')},() => {console.log('Failed')});


function asyncTask() {
    return Promise.resolve()
}

asyncTask().then(() => console.log(name));
const name = 'Anupam';

const p = Promise.reject('failed');

p.then((val) => {
    console.log(val);
    return 'done';
}).then((val) => {
    console.log(val);
    return 'done2'
}).catch((err) => console.log(err))
*/

/*
// example - 2....................................................................
const makeApiCalls = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Resolved in : ${time} ms`);
        }, time)
    })
}

const makeApiWithErr = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(`Rejected in : ${time} ms`);
        }, time)
    })
}

// makeApiCalls(1000).then((data) => console.log(data));

// promise combinators....................................................................
const multipleApiCalls = [makeApiCalls(1000), makeApiWithErr(2500), makeApiCalls(2000)];

// Promise.all is used to execute multiple promises in parallel and wait for all of them to resolve. 
// In case any promise is rejected, it will be caught in the catch block.
Promise.all(multipleApiCalls).then((values) => console.log('promise.all -> ', values)).catch((err) => console.log('promise.all -> ', err))

// Promise.race is used to execute multiple promises and returns the result of the first settled promise (either resolved or rejected).
Promise.race(multipleApiCalls).then((value) => console.log('promise.race -> ', value)).catch((err) => console.log('promise.race -> ', err))

// Promise.allSettled is used to execute multiple promises and waits for all of them to settle (either resolved or rejected).
Promise.allSettled(multipleApiCalls).then((value) => console.log('promise.allSettled -> ', value)).catch((err) => console.log('promise.allSettled -> ', err));

// Promise.any is used to execute multiple promises and returns the result of the first resolved promise.
Promise.any(multipleApiCalls).then((value) => console.log('promise.any -> ', value)).catch((err) => console.log('promise.any -> ', err));
*/



// example - 3....................................................................
const userAuthentication = () => {
    const name = prompt('Enter username');
    const password = prompt('Enter password');
    return new Promise((resolve, reject) => {
        if(name === 'Anupam' && password === 'Anand') {
            resolve('User authenticated!');
        } else {
            reject('Authentication failed!');
        }
    })
}

const goToHomepage = (userAuthenticationStatus) => {
    return Promise.resolve(`Go to homepage as : ${userAuthenticationStatus}`)
}

// example-3 using ten/catch.............................................................
// userAuthentication().then((value) => {
//     console.log("User validated");
//     return goToHomepage(value);
// }).then((resp) => {
//     console.log(resp);
// }).catch((err) => {
//     console.log("Authentication failed")
//     goToHomepage(err)
// })


// example-3 using async/await.............................................................
(async function() {
    try {
        const value = await userAuthentication();
        console.log('User validated');
        const resp = await goToHomepage(value)
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
})()