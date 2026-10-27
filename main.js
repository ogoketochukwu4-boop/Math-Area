let results_Box = document.querySelector('.b');
let Btn = document.querySelector('#Btn');
function Calc() {
  
  let input_Raduis = document.querySelector('#Radius').value**2;
  let pi_Value = Math.PI;
  let calcValue = pi_Value*input_Raduis ;
  results_Box.textContent =`The Area Of Your Circle is ${Math.round(calcValue)}cm²`
}
Btn.addEventListener('click',()=>{
  Calc()
})
