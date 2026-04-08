let currentPlan = "";

/* =========================
   SELECCION DE PLAN (ABAJO)
========================= */
function selectPlan(plan){
  currentPlan = plan;

  const details = document.getElementById('packageDetails');
  const title = document.getElementById('detailsTitle');
  const list = document.getElementById('detailsList');

  title.textContent = "Plan " + plan;

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

  details.classList.add("active");

  details.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================
   BOTÓN DE CONTRATAR
========================= */
function panelSelect(){
  const message = encodeURIComponent(
    "Hola, quiero contratar el plan " + currentPlan + " de Obsidian Circle"
  );

  const phone = "50686657871";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
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
