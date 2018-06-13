var a = prompt("Введите коэффициент a","1");
var b = prompt("Введите коэффициент b","4");
var c = prompt("Введите коэффициент c","4");

if(a == 0)
{
    alert("Не является квадратным уравнением\nКорень введённого уравнения"+(-c/b));
}
else
{
    var discrim = b * b - 4 * a * c;
    if(discrim < 0)
    {
        alert("Уравнение не имеет рациональных корней");
    }
    else
    {
        discrim = Math.sqrt(discrim);
        var denom = 2 * a;
        var root1 = (-b + discrim) / denom;
        var root2 = (-b - discrim) / denom;
        alert("Первый корень: "+root1+"\nВторой корень: "+root2);
    }
}



 
