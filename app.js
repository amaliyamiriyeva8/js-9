const Calculate=document.getElementById('calculate');
const billInput=document.getElementById('bill-amount');
const peopleInput=document.getElementById('number-of-people');
const tipPerPerson=document.getElementById('tip-amount')
const totalPerPerson=document.getElementById('total-per-person');

Calculate.addEventListener('click',()=>{
    let percentage = parseFloat(document.querySelector('input[name="tip"]:checked').value);
    let tips=(billInput.value * percentage )/100;
    let total=(parseFloat(billInput.value) + tips)/parseFloat(peopleInput.value);
    tipPerPerson.innerHTML=tips.toFixed(2);
    totalPerPerson.innerHTML=total.toFixed(2);
})



