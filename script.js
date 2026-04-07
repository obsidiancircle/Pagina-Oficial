function selectPlan(plan){
  const message = encodeURIComponent(
    "Hola, estoy interesado en el plan " + plan + " de Obsidian Circle"
  );

  const phone = "50686657871"; // 👈 cambia si quieres

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

  const contacto = document.getElementById('contacto');
  if(contacto){
    contacto.scrollIntoView({ behavior: 'smooth' });
  }
}

function sendForm(e){
  e.preventDefault();

  let name = document.getElementById('name').value;

  alert("Gracias " + name + ", te contactaremos pronto.");
}

function openWhatsApp(){
  const message = encodeURIComponent(
    "Hola, quiero información sobre sus servicios de fotografía y video"
  );

  const phone = "50686657871"; // 👈 tu número

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function openInstagram(){
  window.open(
    "https://www.instagram.com/obsidiancircleagency",
    "_blank"
  );
}

function openEmail(){
  window.location.href = "mailto:obsidiancircleagency@gmail.com";
}
