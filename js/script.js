/* Menú hamburguesa */

const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", () => {

        menuPrincipal.classList.toggle("activo");

        const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

}


/* Slider */

const track = document.querySelector(".carrusel-track");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

if (track && btnNext && btnPrev) {

    const cards =
    document.querySelectorAll(".tarjeta-carrusel");

    let currentIndex = 0;

    function updateSlider() {

        const cardWidth =
        cards[0].offsetWidth + 30;

        track.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;

    }

    btnNext.addEventListener("click", () => {

        if (currentIndex < cards.length - 3) {

            currentIndex++;

        } else {

            currentIndex = 0;

        }

        updateSlider();

    });

    btnPrev.addEventListener("click", () => {

        if (currentIndex > 0) {

            currentIndex--;

        } else {

            currentIndex = cards.length - 3;

        }

        updateSlider();

    });

    setInterval(() => {

        if (currentIndex < cards.length - 3) {

            currentIndex++;

        } else {

            currentIndex = 0;

        }

        updateSlider();

    }, 4000);

}


/* Idiomas */

const traducciones = {

    es: {

        idiomaActual: "ES",

        navInicio: "Inicio",
        navCultura: "Cultura",
        navPueblos: "Pueblos indígenas",
        navArtesanias: "Artesanías",
        navContacto: "Contacto",

        heroTitulo:
        "DESCUBRE LA CULTURA DE PARAGUAY",

        btnVerMas:
        "Ver más",

        textoIntro:
        "El turismo cultural en Paraguay permite descubrir la identidad del país a través de sus tradiciones, lengua guaraní, artesanías y música. Más que visitar lugares, invita a comprender su patrimonio histórico y cultural desde una perspectiva respetuosa e intercultural.",

        btnInstitucional:
        "Información institucional",


        /* Tarjetas inicio */

        cardGuarani:
        "Cultura Guaraní",

        cardArtesanias:
        "Artesanías",

        cardMusica:
        "Música Tradicional",

        cardGastronomia:
        "Gastronomía",

        cardFestividades:
        "Festividades",

        cardNaturaleza:
        "Naturaleza",

        cardLengua:
        "Lengua Guaraní",


        /* Cultura */

        tituloCultura:
        "CULTURA GUARANÍ",

        btnVolver:
        "Ver más",

        textoCultura1:
        "La cultura guaraní es uno de los pilares de la identidad paraguaya.",

        textoCultura2:
        "Su lengua, tradiciones y cosmovisión forman parte activa de la vida cotidiana del país.",

        textoCultura3:
        "Esta sección presenta su legado histórico y su presencia contemporánea, promoviendo el reconocimiento y respeto por su patrimonio cultural.",

        tituloHistoria:
        "Orígenes e Historia",

        textoHistoria:
        "Descubre las raíces ancestrales de la civilización.",

        tituloLengua:
        "Lengua y Tradición",

        textoLengua:
        "El idioma que da voz a todo un pueblo.",

        tituloDanza:
        "Danzas y Ritmos",

        textoDanza:
        "La expresión del alma a través del movimiento.",

        tituloCosmovision:
        "Cosmovisión",

        textoCosmovision:
        "La conexión sagrada con la Tierra sin Mal.",

        /*Pueblos */

       pueblosHero: 
       "PUEBLOS INDÍGENAS",
       
       pueblosExplorar: 
       "Explorar",
       
       pueblosIntro1:
       "Los pueblos indígenas forman parte esencial de la identidad histórica, cultural y social del Paraguay.",

pueblosIntro2:
"Sus conocimientos ancestrales, lenguas, tradiciones y relación con la naturaleza representan un patrimonio invaluable para América Latina.",


diversidadTitulo: "Diversidad Cultural",

diversidadP1:
"Paraguay alberga diferentes pueblos indígenas distribuidos en distintas regiones del país, especialmente en el Chaco y la Región Oriental.",

diversidadP2:
"Cada comunidad conserva expresiones culturales propias relacionadas con su lengua, espiritualidad, música, medicina tradicional y formas de vida.",


naturalezaTitulo: "Relación con la Naturaleza",

naturalezaP:
"Muchas comunidades indígenas mantienen una profunda conexión espiritual con la naturaleza y consideran el territorio como parte fundamental de su identidad.",

naturalezaLi1: "Protección de bosques y ríos",
naturalezaLi2: "Uso ancestral de plantas medicinales",
naturalezaLi3: "Conocimiento ecológico tradicional",
naturalezaLi4: "Respeto por los ciclos naturales",


lenguasTitulo: "Lenguas y Tradiciones",

lenguasP1:
"Las lenguas indígenas representan una parte fundamental de la diversidad cultural paraguaya.",

lenguasP2:
"El idioma guaraní, hablado ampliamente en Paraguay, tiene origen indígena y constituye uno de los principales símbolos culturales del país.",


fraseIntermedia:
"La cultura indígena no pertenece al pasado, forma parte viva de la identidad paraguaya.",


pueblosDestacadosTitulo: "Pueblos destacados",

guaraniRegion: "Región Oriental",
guaraniDesc:
"Uno de los pueblos más representativos del Paraguay y origen del idioma guaraní.",

enxetRegion: "Chaco Paraguayo",
enxetDesc:
"Comunidad indígena reconocida por su relación espiritual con la naturaleza.",

ayoreoRegion: "Alto Paraguay",
ayoreoDesc:
"Pueblo originario del Chaco con importantes tradiciones ancestrales.",


datosTitulo: "Datos culturales",

dato1: "Pueblos indígenas reconocidos oficialmente.",
dato2: "Familias lingüísticas principales.",
dato3: "Lenguas oficiales del Paraguay.",
dato4: "Años de preservación cultural ancestral.",


galeriaTitulo: "Galería cultural",


fraseFinalTitulo:
"Preservar las culturas indígenas significa preservar la memoria y la identidad de nuestros pueblos.",

fraseFinalTexto:
"La diversidad cultural fortalece el respeto, la inclusión y el reconocimiento de las comunidades originarias como parte esencial del patrimonio histórico y humano del Paraguay.",

        /* Artesanías */

     tituloArtesanias:
        "ARTESANÍAS",

        textoArtesania1:
        "Las artesanías paraguayas reflejan la creatividad y tradición de sus comunidades.",

        textoArtesania2:
        "Desde el delicado Ñandutí hasta el robusto tallado en madera, cada pieza cuenta una historia.",

        etiquetaTextil:
        "Textil Sagrado",

        etiquetaMadera:
        "Arte Sacro",

        tituloNanduti:
        "Ñandutí",

        textoNanduti:
        "Encaje tradicional paraguayo elaborado de forma artesanal, caracterizado por sus diseños circulares y delicados patrones que emulan la tela de una araña. Representa uno de los símbolos textiles más emblemáticos del país.",

        tituloMadera:
        "Tallado en Madera",

        textoMadera:
        "Manifestación artesanal que refleja la habilidad y creatividad de las comunidades locales. Utilizando maderas nobles, los artesanos crean objetos decorativos y utilitarios con una fuerte influencia de la imaginería guaraní."

    },


    en: {

        idiomaActual: "EN",

        navInicio: "Home",
        navCultura: "Culture",
        navPueblos: "Indigenous Peoples",
        navArtesanias: "Handicrafts",
        navContacto: "Contact",

        heroTitulo:
        "DISCOVER THE CULTURE OF PARAGUAY",

        btnVerMas:
        "Learn more",

        textoIntro:
        "Cultural tourism in Paraguay allows visitors to discover the country's identity through its traditions, Guaraní language, handicrafts, and music. More than visiting places, it encourages understanding its historical and cultural heritage from a respectful and intercultural perspective.",

        btnInstitucional:
        "Institutional Information",


        /* Tarjetas inicio */

        cardGuarani:
        "Guaraní Culture",

        cardArtesanias:
        "Handicrafts",

        cardMusica:
        "Traditional Music",

        cardGastronomia:
        "Gastronomy",

        cardFestividades:
        "Festivities",

        cardNaturaleza:
        "Nature",

        cardLengua:
        "Guaraní Language",


        /* Cultura */

        tituloCultura:
        "GUARANÍ CULTURE",

        btnVolver:
        "Learn more",

        textoCultura1:
        "Guaraní culture is one of the pillars of Paraguayan identity.",

        textoCultura2:
        "Its language, traditions, and worldview remain part of everyday life in the country.",

        textoCultura3:
        "This section presents its historical legacy and contemporary presence while promoting respect for its cultural heritage.",

        tituloHistoria:
        "Origins and History",

        textoHistoria:
        "Discover the ancestral roots of the civilization.",

        tituloLengua:
        "Language and Tradition",

        textoLengua:
        "The language that gives voice to an entire people.",

        tituloDanza:
        "Dances and Rhythms",

        textoDanza:
        "The expression of the soul through movement.",

        tituloCosmovision:
        "Worldview",

        textoCosmovision:
        "The sacred connection with the Land Without Evil.",


        /* INDIGENOUS PEOPLES */

titulopueblos: "INDIGENOUS PEOPLES",

pueblosExplorar: "Explore",

pueblosIntro1:
"Indigenous peoples are an essential part of Paraguay’s historical, cultural and social identity.",

pueblosIntro2:
"Their ancestral knowledge, languages, traditions and relationship with nature represent an invaluable heritage for Latin America.",


diversidadTitulo: "Cultural Diversity",

diversidadP1:
"Paraguay is home to different indigenous peoples distributed across various regions of the country, especially in the Chaco and the Eastern Region.",

diversidadP2:
"Each community preserves its own cultural expressions related to language, spirituality, music, traditional medicine and ways of life.",



naturalezaTitulo: "Relationship with Nature",

naturalezaP:
"Many indigenous communities maintain a deep spiritual connection with nature and consider the land a fundamental part of their identity.",

naturalezaLi1: "Protection of forests and rivers",
naturalezaLi2: "Ancestral use of medicinal plants",
naturalezaLi3: "Traditional ecological knowledge",
naturalezaLi4: "Respect for natural cycles",


lenguasTitulo: "Languages and Traditions",

lenguasP1:
"Indigenous languages represent a fundamental part of Paraguay’s cultural diversity.",

lenguasP2:
"The Guaraní language, widely spoken in Paraguay, has indigenous origins and is one of the country’s main cultural symbols.",


fraseIntermedia:
"Indigenous culture does not belong to the past; it is a living part of Paraguayan identity.",


pueblosDestacadosTitulo: "Featured Peoples",

guaraniRegion: "Eastern Region",
guaraniDesc:
"One of the most representative peoples of Paraguay and the origin of the Guaraní language.",

enxetRegion: "Paraguayan Chaco",
enxetDesc:
"Indigenous community recognized for its spiritual relationship with nature.",

ayoreoRegion: "Upper Paraguay",
ayoreoDesc:"Indigenous people from the Chaco with important ancestral traditions.",


datosTitulo: "Cultural Data",

dato1: "Officially recognized indigenous peoples.",
dato2: "Main linguistic families.",
dato3: "Official languages of Paraguay.",
dato4: "Years of ancestral cultural preservation.",

galeriaTitulo: "Cultural Gallery",


fraseFinalTitulo:
"Preserving indigenous cultures means preserving the memory and identity of our peoples.",

fraseFinalTexto:
"Cultural diversity strengthens respect, inclusion and recognition of indigenous communities as an essential part of Paraguay’s historical and human heritage.",

        /* Artesanías */

        tituloArtesanias:
        "HANDICRAFTS",

        textoArtesania1:
        "Paraguayan handicrafts reflect the creativity and traditions of local communities.",

        textoArtesania2:
        "From delicate Ñandutí lace to wood carving, each piece tells a story.",

        etiquetaTextil:
        "Sacred Textile",

        etiquetaMadera:
        "Sacred Art",

        tituloNanduti:
        "Ñandutí",

        textoNanduti:
        "Traditional Paraguayan lace made by hand, characterized by circular designs and delicate patterns that resemble a spider web. It represents one of the country’s most emblematic textile symbols.",

        tituloMadera:
        "Wood Carving",

        textoMadera:
        "Artistic expression that reflects the skill and creativity of local communities. Using noble woods, artisans create decorative and functional objects strongly influenced by Guaraní imagery."

    },


    gn: {

        idiomaActual: "GN",

        navInicio: "Ñepyrũ",
        navCultura: "Teko",
        navPueblos: "Táva Ypykuéra",
        navArtesanias: "Poapy",
        navContacto: "Ñe'ẽndy",

        heroTitulo:
        "EIKUAA PARAGUÁI REKO",

        btnVerMas:
        "Ehechave",

        textoIntro:
        "Paraguái rekokuaa rehegua turismo oheja jaikuaa tetã rembikuaa, ñe'ẽ guaraní, poapy ha purahéi.",

        btnInstitucional:
        "Marandu Institucional",


        /* Tarjetas inicio */

        cardGuarani:
        "Guaraní Reko",

        cardArtesanias:
        "Poapy",

        cardMusica:
        "Purahéi Ymaguare",

        cardGastronomia:
        "Tembi'u",

        cardFestividades:
        "Arete",

        cardNaturaleza:
        "Tekoha",

        cardLengua:
        "Ñe'ẽ Guaraní",


        /* Cultura */

        tituloCultura:
        "GUARANÍ REKO",

        btnVolver:
        "Ehechave",

        textoCultura1:
        "Guaraní reko niko peteĩ Paraguái rembikuaa tuichavéva.",

        textoCultura2:
        "Iñe'ẽ, heko ha arandupy oĩ gueteri tekove ára ha ára rehe.",

        textoCultura3:
        "Ko sección ohechauka hembiasakue ha iñemomba'e ko'ág̃a.",

        tituloHistoria:
        "Ypykue ha Tembiasakue",

        textoHistoria:
        "Eikuaa teko yma guare rapo.",

        tituloLengua:
        "Ñe'ẽ ha Teko",

        textoLengua:
        "Pe ñe'ẽ ome'ẽva ñe'ẽ tavayguápe.",

        tituloDanza:
        "Jeroky ha Purahéi",

        textoDanza:
        "Ánga ñemombe'u ñemongu'e rupive.",

        tituloCosmovision:
        "Arandupy",

        textoCosmovision:
        "Yvy Marã’ẽ rehegua joaju marangatu.",


/* ===== TÁVA YPYKUÉRA ===== */

titulopueblos: "TÁVA YPYKUÉRA",

pueblosExplorar: "Ehecha",

pueblosIntro1:
"Táva ypykuéra niko Paraguái rembiasakue, rekokuaa ha tekohápegua peteĩ mba’e tuicháva.",

pueblosIntro2:
"Iñarandu yma guare, iñe’ẽnguéra, irekó ha ijoaju tekoha rehegua niko peteĩ herencia tuichaitéva América Latina-pe.",


/* --- Teko Reta --- */

diversidadTitulo: "Teko Reta",

diversidadP1:
"Paraguái oguereko heta táva ypykuéra oĩva tetã renda rupi, Chaco ha Región Oriental-pe.",

diversidadP2:
"Peteĩteĩ tekoha ombyatýva hekó, iñe’ẽ, mitãrusu purahéi, pohã ñana ha irekove hag̃ua.",


/* --- Tekohápe Joaju --- */

naturalezaTitulo: "Tekohápe Joaju",

naturalezaP:
"Heta táva ypykuéra oguereko peteĩ joaju ipypukuva tekoha reheve ha ohecha yvy peteĩ mba’e guasu ijeheguietépe.",

naturalezaLi1: "Ka’aguy ha ysyry ñangareko",
naturalezaLi2: "Pohã ñana yma guive ojepurúva",
naturalezaLi3: "Arandupy tekoha rehegua",
naturalezaLi4: "Ara ha arakõi jehechaukaha",


/* --- Ñe’ẽnguéra ha Tembiasa --- */

lenguasTitulo: "Ñe’ẽnguéra ha Tembiasa",

lenguasP1:
"Ñe’ẽ ypykuéra niko peteĩ mba’e tuicháva Paraguái rekokuaa ñemohenda hag̃ua.",

lenguasP2:
"Ñe’ẽ guaraní, ojepurúva heta Paraguay-pe, oguerekóva ypykuéra rapo ha ha’e peteĩ techaukaha guasu tetã reko rehegua.",


/* --- Ñe’ẽ Mbytépegua --- */

fraseIntermedia:
"Teko ypykuéra ndaha’éi yma guaréva, ha’e peteĩ teko oikovéva Paraguái rembiasakuépe.",


/* --- Táva Ypykuéra Ojekuaavéva --- */

pueblosDestacadosTitulo: "Táva Ypykuéra Ojekuaavéva",

guaraniRegion: "Región Oriental",
guaraniDesc:
"Peteĩ táva ypykuéra herakuãvéva Paraguái-pe ha ñe’ẽ guaraní ypykue.",

enxetRegion: "Chaco Paraguayo",
enxetDesc:
"Táva ypykuéra ojekuaáva ijoaju espirituál tekoha reheve.",

ayoreoRegion: "Alto Paraguay",
ayoreoDesc:
"Táva ypykuéra Chaco-gua rehegua, oguerekóva heta iñarandu yma guare.",


/* --- Mba’ekuaarã --- */

datosTitulo: "Mba’ekuaarã",

dato1: "Táva ypykuéra oñemoneĩva Estado rupive.",
dato2: "Ñe’ẽnguéra aty guasu.",
dato3: "Ñe’ẽ oficial Paraguái-pe.",
dato4: "Ary iñarandu ypykuéra ñangareko hag̃ua.",


/* --- Ta’ãngaryrýi --- */

galeriaTitulo: "Ta’ãngaryrýi Teko Ypy",


/* --- Ñe’ẽ Paha --- */

fraseFinalTitulo:
"Táva ypykuéra ñangareko he’ise ñane rembiasakue ha ñande réra ñangareko.",

fraseFinalTexto:
"Teko reta omombarete jerovia, opavave oike hag̃ua ha oñemomba’e hag̃ua táva ypykuéra Paraguái rembiasakue ha teko rehegua hag̃ua.",




        /* Artesanías */

        tituloArtesanias:
        "POAPY",

        textoArtesania1:
        "Paraguái poapy ohechauka mba'apokuaa ha teko ymaguare.",

        textoArtesania2:
        "Ñandutí guive yvyra ñekytĩ peve, opaite mba'e oreko tembiasakue.",

        etiquetaTextil:
        "Ao Marangatu",

        etiquetaMadera:
        "Arte Marangatu",

        tituloNanduti:
        "Ñandutí",

        textoNanduti:
        "Ao po'i paraguái ojejapóva pópe, ojekuaáva ijape apu'a ha iporã hag̃uére. Peteĩva umi Paraguay rembikuaa textil rehegua.",

        tituloMadera:
        "Yvyra Ñekytĩ",

        textoMadera:
        "Poapy ohechaukáva tapicha mba'apokuaa ha arandu. Artesano-kuéra ojapo mba'e porã yvyrágui guaraní rembikuaa reheve."

    }

};


/* Detectar idioma */

const parametros =
new URLSearchParams(window.location.search);

const idioma =
parametros.get("lang") || "es";


/* Aplicar textos */

if (traducciones[idioma]) {

    Object.keys(traducciones[idioma]).forEach(id => {

        const elemento =
        document.getElementById(id);

        if (elemento) {

            elemento.textContent =
            traducciones[idioma][id];

        }

    });

}


/* Modales */

const modal =
document.getElementById("modalCultura");

const modalImg =
document.getElementById("modalImg");

const modalTitulo =
document.getElementById("modalTitulo");

const modalDescripcion =
document.getElementById("modalDescripcion");

const cerrarModal =
document.getElementById("cerrarModal");


const informacionTarjetas = {

    guaraniCard: {

        es: {
            titulo: "Cultura Guaraní",
            descripcion:
            "La cultura guaraní constituye uno de los pilares fundamentales de la identidad histórica y social del Paraguay. Sus tradiciones, creencias, expresiones lingüísticas y formas de organización comunitaria han influido profundamente en la construcción cultural del país desde la época precolombina hasta la actualidad. El idioma guaraní, hablado por gran parte de la población paraguaya, fue reconocido oficialmente junto al español en la Constitución Nacional de 1992.\n\nAdemás de su importancia lingüística, la cultura guaraní conserva conocimientos ancestrales relacionados con la naturaleza, la medicina tradicional y la cosmovisión espiritual. Diversos organismos internacionales, como la UNESCO, han resaltado el valor cultural del patrimonio guaraní debido a su contribución a la diversidad cultural y al fortalecimiento de la identidad latinoamericana."
        },

        en: {
            titulo: "Guaraní Culture",
            descripcion:
            "Guaraní culture represents one of the fundamental pillars of Paraguay’s historical and social identity. Its traditions, beliefs, linguistic expressions, and community organization have deeply influenced the country’s cultural development from pre-Columbian times to the present day. The Guaraní language, spoken by a large part of the Paraguayan population, was officially recognized alongside Spanish in the 1992 National Constitution.\n\nBeyond its linguistic importance, Guaraní culture preserves ancestral knowledge related to nature, traditional medicine, and spiritual worldview. International organizations such as UNESCO have highlighted the cultural value of Guaraní heritage due to its contribution to cultural diversity and the strengthening of Latin American identity."
        },

        gn: {
            titulo: "Guaraní Reko",
            descripcion:
            "Guaraní reko niko peteĩ Paraguái rembikuaa tuichavéva ha iñimportantetereíva tetã rekópe. Iñe'ẽ, heko, jerovia ha tekoaty rehegua omyakã Paraguái rembiasakue ymaite guive ko'ág̃a peve. Avañe'ẽ oñemoneĩ Paraguái ñe'ẽ tee ramo castellano ndive ary 1992-pe.\n\nAvei, guaraní reko oñangareko arandupy yma guare rehe, taha'e pohã ñana, tekoha ñangareko térã jerovia espiritual rehegua. UNESCO ha ambue aty guasu omomba'e guaraní rembikuaa rehegua mba'e tuicha hag̃uére América Latina rekokuaápe."
        },

        imagen: "images/guarani-2.jpg"

    },

    artesaniasCard: {

        es: {
            titulo: "Artesanías",
            descripcion:
            "Las artesanías paraguayas representan una manifestación cultural transmitida de generación en generación y reflejan la creatividad, identidad y conocimientos tradicionales de numerosas comunidades del país. Entre las expresiones más reconocidas se encuentran el ñandutí, el ao po’i y el tallado en madera, elaborados mediante técnicas manuales que conservan procesos ancestrales.\n\nEstas prácticas artesanales poseen un importante valor cultural y económico, ya que contribuyen a preservar el patrimonio inmaterial paraguayo y fortalecen el desarrollo de comunidades locales. Instituciones culturales y turísticas del Paraguay promueven constantemente estas expresiones como parte fundamental de la identidad nacional."
        },

        en: {
            titulo: "Handicrafts",
            descripcion:
            "Paraguayan handicrafts represent a cultural expression transmitted from generation to generation and reflect the creativity, identity, and traditional knowledge of many communities throughout the country. Among the most recognized artistic expressions are Ñandutí lace, ao po’i embroidery, and wood carving.\n\nThese artisanal practices hold important cultural and economic value because they contribute to preserving Paraguay’s intangible heritage and support the development of local communities. Cultural and tourism institutions in Paraguay actively promote these traditions as an essential part of national identity."
        },

        gn: {
            titulo: "Poapy",
            descripcion:
            "Paraguái poapy niko peteĩ teko ymaguare oñembohasáva ñemoñare ñemoñarépe ha ohechauka tetãygua mba'apokuaa ha rembikuaa. Ñandutí, ao po’i ha yvyra ñekytĩ niko umi poapy ojekuaavéva Paraguáipe.\n\nKo'ã mba'e ojapo guasu Paraguái rembikuaa ñangarekópe ha avei oipytyvõ heta tapicha rembiapo ha teko porãme. Hetaiterei aty cultural omomba'e ko'ã poapy Paraguái rekotee ramo."
        },

        imagen: "images/artesanias-2.jpg"

    }

};


/* Abrir modal */

Object.keys(informacionTarjetas).forEach(id => {

    const card =
    document.getElementById(id);

    if (card && modal) {

        card.addEventListener("click", () => {

            modal.style.display = "flex";

            modalImg.src =
            informacionTarjetas[id].imagen;

            modalTitulo.textContent =
            informacionTarjetas[id][idioma].titulo;

            modalDescripcion.textContent =
            informacionTarjetas[id][idioma].descripcion;

        });

    }

});


/* Cerrar modal */

if (cerrarModal && modal) {

    cerrarModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

}


/* Cerrar al hacer click fuera */

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

/* Mantener idioma entre páginas */

const linksInternos =
document.querySelectorAll('a[href$=".html"]');

linksInternos.forEach(link => {

    const url =
    new URL(link.href);

    url.searchParams.set("lang", idioma);

    link.href = url.toString();

});

const selectorIdioma =
document.querySelector(".idioma-selector-container");

if (selectorIdioma) {

    selectorIdioma.addEventListener("mouseover", () => {

        selectorIdioma.classList.add("activo");

    });

    selectorIdioma.addEventListener("mouseout", () => {

        selectorIdioma.classList.remove("activo");

    });

}