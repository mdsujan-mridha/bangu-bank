
function getInputValue(inputId){
    const depositInput=document.getElementById(inputId);
    const depositAmountText=depositInput.value;
    const depositAmount=parseFloat(depositAmountText);
    depositInput.value='';
    return depositAmount;
}
function updateTotalField(totalFieldId,depositAmount){
    const depositTotal=document.getElementById(totalFieldId);
    const depositTotalText=depositTotal.innerText;
    const depositTotalAmount=parseFloat(depositTotalText);
    depositTotal.innerText=depositTotalAmount+depositAmount;
}
function getCurrentBalance(){
  const totalBalance=document.getElementById('total-balance');
  const balanceTotalText=totalBalance.innerText;
  const previousTotalBalance=parseFloat(balanceTotalText);
  return previousTotalBalance;
}


function updateBalnce(depositAmount,add){
   const totalBalance=document.getElementById('total-balance');
  // const balanceTotalText=totalBalance.innerText;
  // const previousTotalBalance=parseFloat(balanceTotalText);
  const previousTotalBalance=getCurrentBalance();
 if(add==true){
  totalBalance.innerText=previousTotalBalance+depositAmount;
 }
  else{
    totalBalance.innerText=previousTotalBalance-depositAmount/*withdrawAmount*/;
  }
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    // const depositInput=document.getElementById('deposit-input');
    // const depositAmountText=depositInput.value;
    // const depositAmount=parseFloat(depositAmountText);
    // call function with pass value 
   const depositAmount=getInputValue('deposit-input');
    if(depositAmount>0){
      updateTotalField('deposit-money',depositAmount);
      updateBalnce(depositAmount,true);
    }
    else{
     // prompt('Enter Vaild Amount');
     alert('Please Enter valid Amount');
      
    }
    // get current deposit 
    //<----------------call funtion for get current deposit--------->
    //updateTotalField('deposit-money',depositAmount);
    // const depositTotal=document.getElementById('deposit-money');
    // const depositTotalText=depositTotal.innerText;
    // const depositTotalAmount=parseFloat(depositTotalText);
    // depositTotal.innerText=depositTotalAmount+depositAmount;
// update total balance 
//updateBalnce(depositAmount,true);
//  const totalBalance=document.getElementById('total-balance');
//   const balanceTotalText=totalBalance.innerText;
//   const previousTotalBalance=parseFloat(balanceTotalText);
//   totalBalance.innerText=previousTotalBalance+depositAmount;
});
// withdraw money 
document.getElementById('withdraw-btn').addEventListener('click',function(){
//  const withdrawInput=document.getElementById('withdraw-input'); 
//  const withdrawAmountText=withdrawInput.value;
//  const withdrawAmount=parseFloat(withdrawAmountText);
  // call function with pass value 
const withdrawAmount=getInputValue('withdraw-input');
 const currentBalance=getCurrentBalance();
  if(withdrawAmount>0 && withdrawAmount<currentBalance){
//   set withdraw amount form user  
//  const withdrawTotal=document.getElementById('withdraw-total');
//  const withdrawTotalText=withdrawTotal.innerText;
//  const withdrawtotalAmount=parseFloat(withdrawTotalText);
//  const withdrawTotalAmountSet=withdrawtotalAmount+withdrawAmount;
// withdrawTotal.innerText=withdrawTotalAmountSet;
// call function after withdraw balance 
updateTotalField('withdraw-total',withdrawAmount);
// set new blance after withdraw money 
updateBalnce(withdrawAmount,false);
// const totalBalance=document.getElementById('total-balance');
// const balanceTotalText=totalBalance.innerText;
// const previousTotalBalance=parseFloat(balanceTotalText);
// totalBalance.innerText=previousTotalBalance-withdrawAmount;
// withdrawInput.value='';
  }
  else{
    alert('Your Balance is low');
}
})