/* =====================================================
   DATOS DEL SITIO - CFC RAFAELA
   Editá este archivo para completar la página.
   Lo usan index.html (inicio) y area.html (sub-página de cada área).
   ===================================================== */

var CFG = {
  tel: "+54 3492 000000",
  mail: "tucorreo@gmail.com",       /* los botones de contacto abren Gmail con este correo */
  dir: "Calle y número, Rafaela, Santa Fe",
  fb: "https://www.facebook.com/",
  yt: "https://www.youtube.com/",
  ig: "https://www.instagram.com/",
  mp: "#",                          /* link de Mercado Pago */
  alias: "tu.alias.aca",

  /* d = día de la semana (0 domingo, 1 lunes ... 6 sábado) */
  horarios: [
    { d: 0, t: "Domingo 10:00 hs" },
    { d: 0, t: "Domingo 19:00 hs" }
  ],

  /* r = recaudado, m = meta */
  campanas: [
    { n: "Doná 1 plato de comida",   r: 170, m: 500 },
    { n: "Doná 5 platos de comida",  r: 140, m: 500 },
    { n: "Doná 10 platos de comida", r: 155, m: 500 },
    { n: "Doná X platos de comida",  r: 150, m: 500 }
  ]
};


/* =====================================================
   ÁREAS
   Cada línea es un cuadro del inicio y, al tocarlo, abre su sub-página.

   n           = nombre visible
   f           = nombre de la foto (images/areas/NOMBRE.jpg). Sin espacios ni tildes.
   texto       = explicación del área. Para separar párrafos escribí \n
   cuando      = días y horarios (opcional)
   para        = a quién está dirigida (opcional)
   responsable = quién la coordina (opcional)

   Para agregar un área nueva, copiá una línea, pegala abajo y poné
   una coma al final de la línea anterior. La última línea no lleva coma.
   ===================================================== */

var AREAS = [
  { n: "Niños", f: "ninos",
    texto: "Escribí acá qué se hace en esta área.\nPara empezar otro párrafo, usá este símbolo.",
    cuando: "Domingos 10:00 hs", para: "Niños de 4 a 11 años", responsable: "Nombre del responsable" },
  { n: "Preadolescentes",     f: "preadolescentes", texto: "", cuando: "" },
  { n: "Adolescentes",        f: "adolescentes",    texto: "", cuando: "" },
  { n: "Jóvenes",             f: "jovenes",         texto: "", cuando: "" },
  { n: "Mujeres",             f: "mujeres",         texto: "", cuando: "" },
  { n: "Hombres",             f: "hombres",         texto: "", cuando: "" },
  { n: "Matrimonios jóvenes", f: "matrimonios",     texto: "", cuando: "" },
  { n: "Colegio",             f: "colegio",         texto: "", cuando: "" },
  { n: "Fundación",           f: "fundacion",       texto: "", cuando: "" },
  { n: "Seminario bíblico",   f: "seminario",       texto: "", cuando: "" },
  { n: "Nueva área 1",        f: "nueva-1",         texto: "", cuando: "" },
  { n: "Nueva área 2",        f: "nueva-2",         texto: "", cuando: "" },
  { n: "Nueva área 3",        f: "nueva-3",         texto: "", cuando: "" }
];
