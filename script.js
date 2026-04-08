let currentPlan = "";

/* =========================
   SELECCIÓN DE PLAN (NUEVO PANEL)
========================= */
function selectPlan(plan){
  currentPlan = plan;

  const panel = document.getElementById('packagePanel');
  const title = document.getElementById('panelTitle');
  const list = document.getElementById('panelBenefits');

  title.textContent = plan;

  let benefits = [];

  if(plan === "Básico"){
    benefits = [
      "10 fotos editadas",
      "Entrega en 48h",
      "Alta calidad",
      "Ideal para iniciar"
    ];
  }

  if(plan === "Pro"){
    benefits = [
      "20 fotos editadas",
      "1 video corto",
      "Optimización para redes",
      "Entrega prioritaria",
      "Concepto creativo"
    ];
  }

  if(plan === "Premium"){
    benefits = [
      "30+ fotos",
      "3 videos",
      "Contenido publicitario",
      "Estrategia de contenido",
      "Entrega express",
      "Soporte personalizado"
    ];
  }

  list.innerHTML = "";
  benefits.forEach(b => {
    const li = document.createElement("li");
    li.textContent = "✔️ " + b;
    list.appendChild(li);
  });

  panel.classList.add("open");

  const contacto = document.getElementById('contacto');
  if(contacto){
    contacto.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  }
}

/* =========================
   CERRAR PANEL
========================= */
function closePanel(){
  document.getElementById('packagePanel').classList.remove('open');
}

/* =========================
   BOTÓN DE CONTRATAR (DEL PANEL)
========================= */
function panelSelect(){
  const message = encodeURIComponent(
    "Hola, quiero contratar el plan " + currentPlan + " de Obsidian Circle"
  );

  const phone = "50686657871";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
}

/* =========================
   FORMULARIO (SI LO USAS)
========================= */
function sendForm(e){
  e.preventDefault();

  let name = document.getElementById('name').value;

  alert("Gracias " + name + ", te contactaremos pronto.");
}

/* =========================
   CONTACTO
========================= */
function openWhatsApp(){
  const message = encodeURIComponent(
    "Hola, quiero información sobre sus servicios de fotografía y video"
  );

  const phone = "50686657871"; 

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
}

function openInstagram(){
  window.open(
    "https://www.instagram.com/obsidiancircleagency",
    "_blank",
    "noopener,noreferrer"
  );
}

function openEmail(){
  window.location.href = "mailto:obsidiancircleagency@gmail.com";
}
