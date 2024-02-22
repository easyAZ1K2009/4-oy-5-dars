// 1
let a = +prompt("Birinchi sonni kiriting:");
let b = +prompt("Ikkinchi sonni kiriting:");
alert(a + b);

// 2
function toSekunds(minutes) {
  let result = minutes * 60;
  console.log(result);
}
toSekunds(5);

// 3
function nextInteger(int) {
  let result = int + 1;
  console.log(result);
}
nextInteger(5);

// 4
function uchburchakYuzi(asos, balandlik) {
  let s = (asos * balandlik) / 2;
  console.log(s);
}
uchburchakYuzi(4, 6);

// 5
function ageToDays(age) {
  let res = age * 365;
  console.log(res);
}
ageToDays(2);

// 6
function numberToCub(num) {
  let res = num * 3;
  console.log(res);
}
numberToCub(6);

// 8
function power(x, y) {
  let res = x * y;
  console.log(res);
}
power(5, 23);

// 9
function hourToSeconds(hour) {
  let second = hour * 3600;
  console.log(second);
}
hourToSeconds(3);

// 10
function uchunchiTomon(tomon1, tomon2) {
  let res = tomon1 + tomon2 - 1;
  console.log(res);
}
uchunchiTomon(13, 17);
