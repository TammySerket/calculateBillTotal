const preTaxAndTipAmount = prompt("Ingrese Monto a pagar, se devolverá valor total con iva y propina")     


calculateBillTotal = (preTaxAndTipAmount) => {
    let iva = preTaxAndTipAmount * (0.095);
    let tips = preTaxAndTipAmount * (0.15);
    let total = preTaxAndTipAmount + iva + tips;
 
   return total;

   /* return resultado.innerHTML = "El total con IVA y propina es =" + "$" + total; */
   
  }
  
  let result = calculateBillTotal(preTaxAndTipAmount)
  console.log(result);
  
 // module.exports = calculateBillTotal;