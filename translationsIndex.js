const translations = {
    en: {
        intro: "I AM",
        roleJunior: "A JUNIOR",
        roleDeveloper: "SOFTWARE DEVELOPER",
        curriculumHeading: "Let's work together",
        curriculumSkills: "Skills reflecting continuous learning",
        curriculumText: "Committed to continuous learning and motivated to contribute to technological projects, I seek to collaborate with multidisciplinary teams to develop creative and efficient solutions. With a solid foundation in Computer Engineering, I have skills in programming, database management, and system analysis, ready to face technical challenges and drive innovation.",
        yearsExperience: "Years of learning and development",
        viewCurriculum: "View My Curriculum",
        skillCplusplus: "C++",
        skillCsharp: "C#",
        skillJava: "JAVA",
        skillMySQL: "MySQL",
        skillPython: "Python",
        skillHTML: "HTML"
    },
    ca: {
        intro: "SÓC",
        roleJunior: "UN JUNIOR",
        roleDeveloper: "DESENVOLUPADOR DE PROGRAMARI",
        curriculumHeading: "Treballem junts",
        curriculumSkills: "Habilitats que reflecteixen l'aprenentatge continu",
        curriculumText: "Compromès amb l'aprenentatge continu i motivat per aportar en projectes tecnològics, busco col·laborar amb equips multidisciplinaris per desenvolupar solucions creatives i eficients. Amb una base sòlida en Enginyeria Informàtica, tinc habilitats en programació, gestió de bases de dades i anàlisi de sistemes, preparat per afrontar reptes tècnics i impulsar la innovació.",
        yearsExperience: "Anys d'aprenentatge i Desenvolupament",
        viewCurriculum: "Veure el meu currículum",
        skillCplusplus: "C++",
        skillCsharp: "C#",
        skillJava: "JAVA",
        skillMySQL: "MySQL",
        skillPython: "Python",
        skillHTML: "HTML"
    },
    es: {
        intro: "SOY",
        roleJunior: "UN JUNIOR",
        roleDeveloper: "DESARROLLADOR DE SOFTWARE",
        curriculumHeading: "Trabajemos juntos",
        curriculumSkills: "Habilidades que reflejan el aprendizaje continuo",
        curriculumText: "Comprometido con el aprendizaje continuo y motivado para contribuir en proyectos tecnológicos, busco colaborar con equipos multidisciplinarios para desarrollar soluciones creativas y eficientes. Con una base sólida en Ingeniería Informática, tengo habilidades en programación, gestión de bases de datos y análisis de sistemas, preparado para afrontar retos técnicos e impulsar la innovación.",
        yearsExperience: "Años de aprendizaje y desarrollo",
        viewCurriculum: "Ver Mi Currículum",
        skillCplusplus: "C++",
        skillCsharp: "C#",
        skillJava: "JAVA",
        skillMySQL: "MySQL",
        skillPython: "Python",
        skillHTML: "HTML"
    }
};



function changeLanguage(lang, flagSrc) {
    // Canvia la bandera de l'idioma actual
    document.getElementById('current-language-flag').src = flagSrc;

    // Amaga el menú després de seleccionar l'idioma
    document.querySelector('.language-dropdown').classList.remove('show');
    
    document.documentElement.lang = lang;
    document.documentElement.lang = lang;
    document.querySelector('.intro').textContent = translations[lang].intro;
    document.querySelector('.junior').textContent = translations[lang].roleJunior;
    document.querySelector('.developer').textContent = translations[lang].roleDeveloper;
    document.querySelector('#curriculum h2').textContent = translations[lang].curriculumHeading;
    document.querySelector('.skill-text h3').textContent = translations[lang].curriculumSkills;
    document.querySelector('.skill-text p').textContent = translations[lang].curriculumText;
    document.querySelector('.text-gran p').textContent = translations[lang].yearsExperience;
    document.querySelector('.curriculum-button .button').textContent = translations[lang].viewCurriculum;
    
    // Skills section
    document.querySelector('.div1 h3').textContent = translations[lang].skillCplusplus;
    document.querySelector('.div3 h3').textContent = translations[lang].skillCsharp;
    document.querySelector('.div2 h3').textContent = translations[lang].skillJava;
    document.querySelector('.div4 h3').textContent = translations[lang].skillMySQL;
    document.querySelector('.div5 h3').textContent = translations[lang].skillPython;
    document.querySelector('.div6 h3').textContent = translations[lang].skillHTML;
}

