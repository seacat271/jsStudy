function pow(x,n) {
   let result=x
    let i=1;
for (i=1; i<n; i+=1);{
    result *=x;
}
return result;
}

let x=prompt ("Введите Х");
let n=prompt ("Введите степень");
if (n<1) {
    alert ("такое число не поддерживаеться");
} else {
    alert (pow(x,n));
}