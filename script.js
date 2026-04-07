function selectPlan(plan){
  alert("Has seleccionado el plan: " + plan);

  document.getElementById('message').value =
    "Estoy interesado en el plan " + plan;

  document
    .getElementById('contacto')
    .scrollIntoView({ behavior:'smooth' });
}

function sendForm(e){
  e.preventDefault();

  let name = document.getElementById('name').value;

  alert("Gracias " + name + ", te contactaremos pronto.");
}

function bookCall(){
  window.open("https://wa.me/346XXXXXXXX","_blank");
}
