const x = '1';
const y = '2';

console.log(x, y);
console.log('I am %s and my name is %d', 'Anupam', 10);
console.clear(); // Clears the console

console.count('Anupam');
console.count('Anupam');
console.count('Anand');

const ProgressBar = require('progress');
const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas', {
    total: 100
})

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete) {
        clearInterval(timer);
    }
},100)