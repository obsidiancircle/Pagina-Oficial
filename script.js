let currentPlan = "";

/* =========================
   SELECCION DE PLAN
========================= */
function selectPlan(plan){
  currentPlan = plan;

  const details = document.getElementById('packageDetails');
  const title = document.getElementById('detailsTitle');
  const list = document.getElementById('detailsList');

  if(!details || !title || !list) return;

  title.textContent = "Plan " + plan;

  let benefits = [];

  if(plan === "Starter Pack"){
    benefits = [
      "Diagnóstico y estrategia de campaña personalizada para el negocio del cliente.",
      "Producción profesional: video y fotografía en un día de grabación en sitio.",
      "Edición y adaptación del contenido para Instagram, TikTok y Facebook.",
      "Gestión y monitoreo durante 3 días postelanzamiento.",
       "Informe final con métricas, análisis y recomendaciones."
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
    li.textContent = b;
    list.appendChild(li);
  });

  details.classList.add("active");

  setTimeout(() => {
    details.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}

/* =========================
   BOTÓN DE CONTRATAR
========================= */
function panelSelect(){

  if(!currentPlan){
    alert("Selecciona un plan primero");
    return;
  }

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
