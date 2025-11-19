function outer(){
    var x = 20;
    function inner(){
        console.log(n)
    }
    return inner
}
var y = outer();
console.log(y);

y();