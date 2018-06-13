function isAnagram(str1, str2)
{
    str1 = str1.split('').sort().join('');    
    str2 = str2.split('').sort().join('');
    return str1 == str2;
}

var str1 = prompt("Введите первую строку: ");
var str2 = prompt("Введите вторую строку: ");
alert(isAnagram(str1, str2) ? "Строки являются анаграммами" : "Строки не являются анаграммами");