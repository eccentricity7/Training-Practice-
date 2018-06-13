function Map(map, curr)
{
    if(curr in map)
    {
        map[curr] += 1;
    }
    else
    {
        map[curr] = 1;
    }
    return map;
}

var arr = [];
var n = 0;
var map = {};

n = prompt("Введите следующее число массива А. Для остановки ввода введите stop.", "stop"); 
while(n != "stop")
{
    arr.push(n);  
    n = prompt("Введите следующее число массива А. Для остановки ввода введите stop.", "stop"); 
}

arr.reduce(Map, map);

var str = "";
for(key in map)
{
    str = str + key + " - " + map[key] + ", ";
}
alert("Исходный массив: " + arr + "\nКоличество повторений: " + str);