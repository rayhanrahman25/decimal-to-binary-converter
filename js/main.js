
var result = document.getElementById('result');
var submit = document.getElementById('submit');

function binary(n){
n.preventDefault();
const num = document.getElementById('number').value ;
if(num === ''){
  alert("Please Enter Number");
}else if(num < 0){
  alert("Please Insert Positive Number");
}else{
  result.style.visibility = 'visible';
}
let binarynumber = Number(num).toString(2);
result.innerHTML = binarynumber;

}
submit.addEventListener('click',binary);
