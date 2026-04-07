function selectPlan(plan){
  const messageInput = document.getElementById('message');

  if(messageInput){
    messageInput.value =
      "Hola, estoy interesado en el plan " + plan + " de Obsidian Circle";
  }

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

  const phone = "346XXXXXXXX"; // 👈 cambia esto

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function openWhatsApp(){
  const message = encodeURIComponent(
    "Hola, quiero información sobre sus servicios"
  );

  const phone = "50686657871"; // 👈 tu número (SIN +)

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function openInstagram(){
  window.open(
    "https://www.instagram.com/obsidiancircleagency?igsh=YnFoM3EwMDA0ZXQ5",
    "_blank"
  );
}

function openEmail(){
  window.location.href = "mailto:obsidiancircleagency@gmail.com";
