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
  let pcalabresa, pportuguesa,pquatroqueijos,p1,p2,p3,pd1,pd2,pd3;
  pcalabresa = document.getElementById("pcalabresa").value;
  pportuguesa = document.getElementById("pportuguesa").value;
  pquatroqueijos = document.getElementById("pquatroqueijos").value;

 if (pcalabresa >= 1) {
   p1 =  parseInt(pcalabresa) * 35
   console.log(p1)
  if (pportuguesa >= 1) {
   p2 =  parseInt(pportuguesa) * 40
   console.log(p2)
   }
    if (pquatroqueijos >= 1) {
     p3 =  parseInt(pquatroqueijos) * 45
     console.log(p3)
    }
    if (pcalabresa >=1){
  pd1 = document.getElementById("pedido1");
  pd1.innerHTML='1 PIZZA DE CALABRESA  VALOR R$35'
  
  }
 }

}

 