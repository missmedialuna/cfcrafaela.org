const CFG = {
  tel: "+54 3492 62-1154",
  mail: "cfcrafaelaoficina@gmail.com",       /* los botones de contacto abren Gmail con este correo */
  dir: "Av. Williner 350, Rafaela, Santa Fe",
  fb: "https://www.facebook.com/cfcrafaela",
  yt: "https://www.youtube.com/cfcrafaelaa",
  ig: "https://www.instagram.com/cfcrafaela",
  mp: "https://www.mercadopago.com.ar/home",                          /* link de Mercado Pago */
  alias: "cfc.rafaela.dar",

  /* d = día de la semana (0 domingo, 1 lunes ... 6 sábado) */
  horarios: [
    { d: 0, t: "Domingo 11:00 hs" },
    { d: 0, t: "Domingo 20:00 hs" },
    { d: 3, t: "Miércoles 20:00 hs"},
  ],


  areas: [
    { n: "Músicos",             f: "musicos" },
    { n: "Multimedia",          f: "multimedia" },
    { n: "Voluntarios",         f: "voluntarios" },
    { n: "Niños",               f: "ninos" },
    { n: "Preadolescentes",     f: "preadolescentes" },
    { n: "Adolescentes",        f: "adolescentes" },
    { n: "Jóvenes",             f: "jovenes" },
    { n: "Mujeres",             f: "mujeres" },
    { n: "Hombres",             f: "hombres" },
    { n: "Matrimonios",         f: "matrimonios" },
    { n: "Hospital",            f: "hospital" },
    { n: "Escuela de vida",     f: "escuela" },
    { n: "Academia GEN",        f: "academia" }
  ]
};


var $ = function (s) { return document.querySelectorAll(s); };
function each(s, f) { Array.prototype.forEach.call($(s), f); }

each("[data-yt]", function (e) { e.href = CFG.yt; e.target = "_blank"; e.rel = "noopener"; });
each("[data-fb]", function (e) { e.href = CFG.fb; });
each("[data-ig]", function (e) { e.href = CFG.ig; });
each("[data-mp]", function (e) { e.href = CFG.mp; });
each("[data-mail]", function (e) { e.textContent = CFG.mail; });
each("[data-dir]", function (e) { e.textContent = CFG.dir; });
each("[data-mapa]", function (e) { e.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CFG.dir); });
$("#alias")[0].textContent = CFG.alias;


var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
$("#horarios")[0].innerHTML = CFG.horarios.map(function (h) { return "<li>" + h.t + "</li>"; }).join("");
(function () {
  var now = new Date(), best = null;
  CFG.horarios.forEach(function (h) {
    var m = h.t.match(/(\d{1,2}):(\d{2})/);
    if (!m) return;
    var d = new Date(now);
    d.setHours(+m[1], +m[2], 0, 0);
    d.setDate(d.getDate() + ((h.d - now.getDay() + 7) % 7));
    if (d < now) d.setDate(d.getDate() + 7);
    if (!best || d < best) best = d;
  });
  if (best) {
    var hoy = best.toDateString() === now.toDateString();
    $("#proxima")[0].textContent = "Próxima reunión: " + (hoy ? "hoy" : dias[best.getDay()] + " " + best.getDate()) +
      " a las " + best.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) + " hs";
}
})();


var col = ["#0f2a43", "#2e7d6b", "#7a4e9c", "#b5462f", "#1f6f9c", "#8a6a12", "#3d5a80", "#a23b72", "#2a7f62", "#5c4b8a"];
$("#areas")[0].innerHTML = CFG.areas.map(function (m, i) {
  return '<a class="tile" href="#" style="background:' + col[i % col.length] + '">' +
    '<img src="images/areas/' + m.f + '.jpg" alt="" onerror="this.remove()">' +
    '<span><small>Área</small><br>' + m.n + '</span></a>';
}).join("");

const AREAS = CFG.areas.map(a => ({ n: a.n, f: a.f }));
const iniciarCarrusel = () => {
  const colores = ["#3a86b4", "#2e7d6b", "#7a4e9c", "#b5462f", "#1f6f9c", "#8a6a12", "#3d5a80", "#a23b72", "#2a7f62", "#5c4b8a", "#8c3b3b", "#2f6690", "#4b7f52"];

  const pista = document.querySelector("#areas");
  const anterior = document.querySelector(".flecha.ant");
  const siguiente = document.querySelector(".flecha.sig");

  if (!pista || !anterior || !siguiente) {
    console.error("Falta el carrusel en el HTML (#areas, .flecha.ant, .flecha.sig)");
    return;
  }

  /* Tarjetas */
  pista.innerHTML = AREAS.map((a, i) => `
    <div class="tile" style="background:${colores[i % colores.length]}">
      <img src="images/areas/${a.f}.jpg" alt="" draggable="false" onerror="this.remove()">
      <span><small>Área</small><br>${a.n}</span>
    </div>`).join("");

  /* Flechas */
  const suave = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  function paso() {
    return Math.max(pista.clientWidth * 0.8, 220);
  }
  anterior.onclick = () => pista.scrollBy({ left: -paso(), behavior: suave });
  siguiente.onclick = () => pista.scrollBy({ left: paso(), behavior: suave });

  /* Arrastrar con el mouse (en el celular alcanza con dedito) */
const arrastre = { activo: false, inicio: 0, scroll: 0 };
  const soltar = () => {
    arrastre.activo = false;
    pista.classList.remove("arrastrando");
  };

  pista.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse") return;
  arrastre.activo = true;
  arrastre.inicio = e.clientX;
  arrastre.scroll = pista.scrollLeft;
});

  pista.addEventListener("pointermove", (e) => {
  if (!arrastre.activo) return;
  const dx = e.clientX - arrastre.inicio;
  if (Math.abs(dx) > 5) pista.classList.add("arrastrando");
  pista.scrollLeft = arrastre.scroll - dx;
});

pista.addEventListener("pointerup", soltar);
pista.addEventListener("pointerleave", soltar);
};

iniciarCarrusel();


$("#copiar")[0].onclick = function () {
  var ok = function () { $("#copiado")[0].textContent = "Alias copiado"; };
  var manual = function () { $("#copiado")[0].textContent = "Copia manual: " + CFG.cfcextension; };
  try { navigator.clipboard.writeText(CFG.cfcextension).then(ok, manual); } catch (e) { manual(); }
};


var b = $("#burger")[0], m = $("#menu")[0];
b.onclick = function () { var o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o); };
each("nav a", function (a) {
  a.addEventListener("click", function () { m.classList.remove("open"); b.setAttribute("aria-expanded", "false"); });
});
