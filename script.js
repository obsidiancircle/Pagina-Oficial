function selectPlan(plan){
  document.getElementById('message').value =
    "Hola, estoy interesado en el plan " + plan + " de Obsidian Circle";

  document.getElementById('contacto')
    .scrollIntoView({behavior:'smooth'});
}

function sendForm(e){
  e.preventDefault();

  let name = document.getElementById('name').value;

  alert("Gracias " + name + ", te contactaremos pronto.");
}

function bookCall(){
  const message = encodeURIComponent(
    "Hola, quiero información sobre sus servicios de fotografía y video"
  );

  window.open("https://wa.me/346XXXXXXXX?text=" + message, "_blank");
}
