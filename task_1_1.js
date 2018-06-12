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
        var nom = 2 * c;
        var root1, root2;
        if(b < 0)
        {
            root1 = (-b + discrim);
            root2 = nom / root1;
            root1 /= denom;
        }
        else
        {
            root2 = (-b - discrim);
            root1 = nom / root2;
            root2 /= denom;
        }
        alert("Первый корень: "+root1+"\nВторой корень: "+root2);
    }
}



 
