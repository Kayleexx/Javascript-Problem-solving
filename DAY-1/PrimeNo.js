function isPrime(number) {
    if(number<=1) {
        return false;
    }

    for(let i =2; i<= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(8));
console.log(isPrime(29));
console.log(isPrime(291));
console.log(isPrime(164));