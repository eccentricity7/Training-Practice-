var n = prompt("Введите число n: ", "2")
var sum = 1.0;

for(var i = 2; i <= n; i++)
{
    sum += 1.0 / i;
}

alert("Значение суммы: " + sum)