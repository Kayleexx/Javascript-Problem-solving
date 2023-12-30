const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nFibo() {
    rl.question('Enter a number: ', (input) => {
        let n = parseInt(input);

        if (isNaN(n) || n < 0) {
            console.log("Please enter a valid positive number.");
            rl.close();
            return;
        }

        let result = calculateFibo(n);
        console.log(`The Fibonacci number at position ${n} is ${result}`);
        rl.close();
    });
}


function calculateFibo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

nFibo();
