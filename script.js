let useInp = prompt('Введите значение:');

if(useInp == !isNaN){
    alert("Вы ввели число: " + useInp);
} else {
    alert("Введено некорректное значение");
}