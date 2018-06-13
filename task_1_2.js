function isPrime(numb) {
    if(numb < 0)
    {
        numb = -numb;
    }
    if(numb <= 1 || (numb - Math.round(numb)) != 0)
    {
        return false;
    }
    if(numb % 2 === 0 || numb % 3 === 0)
    {
        return false;
    }
    for(var i = 5; i*i < numb; i++) {
        if(numb % i === 0) {
            return false;
        }
    }
    return true;
}

var numb = prompt("Введите число", "10");
alert(isPrime(numb));