// FIRST

var twoCatetsMethod = true;
var calcHipotBtn = document.querySelector(".hipoten-section #calc_btn");

var firstDescSpan = document.querySelector(".hipoten-section #first_desc");
var secondDescSpan = document.querySelector(".hipoten-section #second_desc");

function change_method_click(btn_id) {
  if (btn_id == "two_catets_btn") {
    twoCatetsMethod = true;
    firstDescSpan.innerHTML = "a=";
    secondDescSpan.innerHTML = "b=";
  } else {
    twoCatetsMethod = false;
    firstDescSpan.innerHTML = "b=";
    secondDescSpan.innerHTML = "c=";
  }
}

calcHipotBtn.addEventListener("click", function () {
  let kat_A = document.getElementById("kat_A").value;
  let kat_B = document.getElementById("kat_B").value;

  let resultTag = document.querySelector(".hipoten-section #result");
  let result = "";
  if (twoCatetsMethod) {
    result =
      "c= " +
      Math.sqrt(Math.pow(parseInt(kat_A), 2) + Math.pow(parseInt(kat_B), 2)).toFixed(2);
  } else {
    result =
      "a= " +
      Math.sqrt(Math.pow(parseInt(kat_B), 2) - Math.pow(parseInt(kat_A), 2)).toFixed(2);
  }

  resultTag.innerHTML = result;
});

//SECOND

var calсQuadraticBtn = document.querySelector(".quadratic-section #calc_btn");
calсQuadraticBtn.addEventListener("click", function () {
  let aVal = getValueIfExist(document.querySelector(".quadratic-section #a_val"));
  let bVal = getValueIfExist(document.querySelector(".quadratic-section #b_val"));
  let cVal = getValueIfExist(document.querySelector(".quadratic-section #c_val"));
  let resultTag = document.querySelector(".quadratic-section #result");
  let result = "";

  let discriminant = Math.pow(bVal, 2) - 4 * aVal * cVal;
  if (discriminant > 0) {
    result =
      "x1= " +
      (-bVal + Math.sqrt(discriminant)) / (2 * aVal) +
      " x2= " +
      (-bVal - Math.sqrt(discriminant)) / (2 * aVal);
  } else if (discriminant === 0) {
    result = "x= " + (-bVal / 2) * aVal;
  } else {
    result = "Коренів немає";
  }

  console.log(`a= ${aVal}, b= ${bVal}, c= ${cVal} `);
  resultTag.innerHTML = result;
});

function getValueIfExist(selection) {
  if (selection.value !== "") {
    return selection.value;
  }
  return 1;
}

//THIRD

var calсTabulationBtn = document.querySelector(".tabulation-section #calc_btn");

function addLineToInnerHTML(tag, string) {
  tag.innerHTML += `<br>${string}`;
}

function Y(x) {
  return Math.sin(x) * Math.cos(x);
}

calсTabulationBtn.addEventListener("click", function () {
  console.log(" llele");
  let aVal = getValueIfExist(document.querySelector(".tabulation-section #a_val"));
  let bVal = getValueIfExist(document.querySelector(".tabulation-section #b_val"));
  let hVal = getValueIfExist(document.querySelector(".tabulation-section #h_val"));
  let resultTag = document.querySelector(".tabulation-section #result");
  resultTag.innerHTML = "";

  let tmpX = parseFloat(aVal);
  while (tmpX <= bVal) {
    addLineToInnerHTML(resultTag, `X= ${tmpX} Y=${Y(tmpX).toFixed(2)}`);
    tmpX += parseFloat(hVal);
  }
});
