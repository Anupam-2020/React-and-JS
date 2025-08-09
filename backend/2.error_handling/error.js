// const error = new Error('Something went wrong');
// console.log(error.stack);
// console.log(error.message);
// throw new Error('This is an error message')


// creating custom error class.................................................................
// const {CustomError} = require('./CustomError');
// throw new CustomError('This is a custom error message');



// using try catch block to handle errors.................................................................
// try {
//     doSomething();
// } catch(error) {
//     console.log('Error Occured');
//     console.log(error);
// }


function doSomething() {
    console.log('Doing something...');
    const data = fetch('https://api.example.com/data');
    return data;
    // throw new Error('Something went wrong');
}


// uncaughtException event to handle uncaught exceptions.................................................................
// process.on('uncaughtException', (error) => {
//     console.log('There was an uncaught exception:');
//     process.exit(1); // Exit the process with a failure code
// });

// doSomething();


// Exception with promises................................................................
// const promise = new Promise((res, rej) => {
//     if(true) {
//         res(doSomething());
//     } else {
//         rej(doSomething());
//     }
// })

// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Error in promise:', err);
// })


// Exception with async await.................................................................
async function someFunction() {
    try {
        await doSomething();
    } catch (error) {
        console.log('Error in async function:', error);
    }
}

someFunction();