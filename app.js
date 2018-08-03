 let btn = document.getElementById("boton");
 calculateBillTotal = (preTaxAndTipAmount) => {
  
    btn.addEventListener("click", () => {  

   preTaxAndTipAmount = document.getElementById("totalBruto").value;     
   let iva = preTaxAndTipAmount * (0.9,5);
   let tips = iva * (0.15);
   let total = iva + tips;

   console.log(total);
});
  }
  
 // module.exports = calculateBillTotal;