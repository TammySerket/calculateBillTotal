const btn = document.getElementById("boton");
const resultado = document.getElementById("result");

calculateBillTotal = () => {
  const preTaxAndTipAmount = document.getElementById("totalBruto").value;     
   let iva = preTaxAndTipAmount * (0.095);
   let tips = preTaxAndTipAmount * (0.15);
   let total = preTaxAndTipAmount + iva + tips;

   return total;
  /* btn.addEventListener("click", () => {
      return resultado.innerHTML = "El total con IVA y propina es =" + "$" + total;  
   }); */
  }
  
  
 // module.exports = calculateBillTotal;