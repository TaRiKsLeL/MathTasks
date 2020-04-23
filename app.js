var calcRadBtn = document.querySelector(".circle-section #calc_btn");
var calcHipotBtn = document.querySelector(".hipoten-section #calc_btn");

calcRadBtn.addEventListener("click", function () {
  let radius = document.getElementById("radius").value;
  let result = document.querySelector(".circle-section #result");

  console.clear();
  console.log(radius);
  console.log(typeof radius);

  result.innerHTML = "Результат= " + Math.PI * Math.pow(parseInt(radius), 2);
});

calcHipotBtn.addEventListener("click", function () {
    let kat_A = document.getElementById("kat_A").value;
    let kat_B = document.getElementById("kat_B").value;
  
    let result = document.querySelector(".hipoten-section #result");
  
    result.innerHTML =
      "Результат= " +
      Math.sqrt(Math.pow(parseInt(kat_A), 2) + Math.pow(parseInt(kat_B), 2));
  });