

var calcBtn = document.getElementById('calc_btn');

calcBtn.addEventListener('click',function(){

    var radius = document.getElementById('radius').value;
    var result = document.getElementById('result');
    
    console.clear();
    console.log(radius);
    console.log(typeof radius);

    result.innerHTML = "Результат= " + Math.PI*Math.pow(parseInt(radius),2);
})