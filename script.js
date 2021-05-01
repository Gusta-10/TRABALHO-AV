function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("ibusca");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbusca");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function comprar(){
  let pcalabresa, pportuguesa,pquatroqueijos,p1,p2,p3,pd1,pd2,pd3,total;
  pcalabresa = document.getElementById("pcalabresa").value;
  pportuguesa = document.getElementById("pportuguesa").value;
  pquatroqueijos = document.getElementById("pquatroqueijos").value;
  p1 =  parseInt(pcalabresa) * 35
  p2 =  parseInt(pportuguesa) * 40
  p3 =  parseInt(pquatroqueijos) * 45

 if (pcalabresa >= 1) {
   
   pd1 = document.getElementById("pedido1");
   pd1.innerHTML="R$" + p1 +",00 O VALOR DO SEU PEDIDO DE PIZZA DE CALABRESA"
  ELSE (pcalabresa = 0)
   pd1 = document.getElementById("pedido1");
   pd1.innerHTML="1° PEDIDO APARECERÁ AQUI!!"
  if (pportuguesa >= 1) {
  
   pd2 = document.getElementById("pedido2");
   pd2.innerHTML="R$" + p2 +",00 O VALOR DO SEU PEDIDO DE PIZZA DE PORTUGUESA"
   }
    if (pquatroqueijos >= 1) {
  
     pd3 = document.getElementById("pedido3");
     pd3.innerHTML="R$" + p3 +",00 O VALOR DO SEU PEDIDO DE PIZZA QUATRO QUEIJOS"
    }
    if (pcalabresa >= 1)
    total=parseInt(p1) + parseInt(total)
    total=document.getElementById("Totalapagar");
    total.innerHTML="R$"+total+",00 A PAGAR"
    }


 }



 