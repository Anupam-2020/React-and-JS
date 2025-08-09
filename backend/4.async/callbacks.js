function asyncTask(cb) {
    console.log('Starting async task...');
    setTimeout(() => {
        console.log('Async task executed.');
        cb();
    }, 0);
}

asyncTask(() => {
    console.log(name);
});

console.log('Async task completed.');
const name = 'John Doe';