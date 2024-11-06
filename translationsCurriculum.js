const translations = {
    en: {
        aboutText: "Computer Engineering student focused on software design, programming, and system management.",
        about: "About",
        habilities: "habilities",
        education: "Education",
        educationText: "I am currently in my third year of a Computer Engineering degree at the University of Girona, with an average grade of 7.1. Previously, I completed high school at Montjuïc Girona International School, achieving a final grade of 8.62.",
        skills: "Skills",
        skillsText: "I have a strong ability to work in teams and excel in effective communication. I adapt easily to challenges thanks to my problem-solving skills and continuous learning attitude. I manage my time effectively and always apply critical thinking in my tasks.",
        languages: "Languages",
        languagesText: "I am fluent in Catalan and Spanish as native languages. My English proficiency is intermediate, and I also hold an A2 certification in French.",
        professionalCompetencies: "Professional Competencies",
        competenciesText: "Roles include junior software developer, IT support technician, junior database analyst, software engineering assistant, intern at a technology company, and systems analyst.",
        technicalKnowledge: "Technical Knowledge",
        technicalText: "I am proficient in programming languages like C++, Java, MIPS, C#, VHDL, and Python. Additionally, I use development tools such as R Studio, GTK Wave, and MATLAB.",
        downloadCV: "Download CV"
    },
    ca: {
        aboutText: "Estudiant d'Enginyeria Informàtica centrat en disseny de software, programació i gestió de sistemes.",
        about: "Sobre Mi",
        habilities: "habililitats",
        education: "Formació",
        educationText: "Actualment estic cursant el tercer any del Grau en Enginyeria Informàtica a la Universitat de Girona, on he aconseguit una nota mitjana de 7,1. Anteriorment, vaig completar el Batxillerat a Montjuïc Girona International School, obtenint una nota final de 8,62.",
        skills: "Aptituds",
        skillsText: "Tinc una sòlida capacitat per treballar en equip i destaco en la comunicació efectiva. M'adapto fàcilment als desafiaments gràcies a la meva habilitat en la resolució de problemes i l'aprenentatge continu. Gestiono eficaçment el meu temps i sempre aplico el pensament crític en les meves tasques.",
        languages: "Idiomes",
        languagesText: "Parlo català i espanyol com a llengües maternes. El meu nivell d'anglès és mitjà, i també tinc certificació de nivell A2 en francès.",
        professionalCompetencies: "Competències Professionals",
        competenciesText: "Inclou rols com desenvolupador de programari junior, tècnic de suport informàtic, analista de bases de dades junior, assistent d'enginyeria del software, practicant en empresa de tecnologia, i analista de sistemes.",
        technicalKnowledge: "Coneixements Tècnics",
        technicalText: "Domino llenguatges de programació com C++, Java, MIPS, C#, VHDL, i Python. A més, utilitzo eines de desenvolupament com R Studio, GTK Wave, i MATLAB.",
        downloadCV: "Descarrega CV"
    },
    es: {
        aboutText: "Estudiante de Ingeniería Informática enfocado en diseño de software, programación y gestión de sistemas.",
        about: "Sobre Mi",
        habilities: "habililidades",
        education: "Educación",
        educationText: "Actualmente estoy cursando el tercer año del Grado en Ingeniería Informática en la Universidad de Girona, con una nota media de 7,1. Anteriormente, completé el Bachillerato en Montjuïc Girona International School, obteniendo una nota final de 8,62.",
        skills: "Aptitudes",
        skillsText: "Tengo una sólida capacidad para trabajar en equipo y destaco en la comunicación efectiva. Me adapto fácilmente a los desafíos gracias a mi habilidad en la resolución de problemas y actitud de aprendizaje continuo. Gestiono eficazmente mi tiempo y siempre aplico el pensamiento crítico en mis tareas.",
        languages: "Idiomas",
        languagesText: "Hablo catalán y español como lenguas maternas. Mi nivel de inglés es intermedio, y también tengo certificación de nivel A2 en francés.",
        professionalCompetencies: "Competencias Profesionales",
        competenciesText: "Incluye roles como desarrollador de software junior, técnico de soporte informático, analista de bases de datos junior, asistente de ingeniería de software, practicante en empresa de tecnología, y analista de sistemas.",
        technicalKnowledge: "Conocimientos Técnicos",
        technicalText: "Domino lenguajes de programación como C++, Java, MIPS, C#, VHDL, y Python. Además, utilizo herramientas de desarrollo como R Studio, GTK Wave, y MATLAB.",
        downloadCV: "Descargar CV"
    }
};



function changeLanguage(lang, flagSrc) {
    // Canvia la bandera de l'idioma actual
    document.getElementById('current-language-flag').src = flagSrc;

    // Amaga el menú després de seleccionar l'idioma
    document.querySelector('.language-dropdown').classList.remove('show');
    
    document.documentElement.lang = lang;

    // Main section translations
    document.querySelector('.frontPage .title p').textContent = translations[lang].aboutText;
    
    // About section
    document.querySelector('.div1 h2').textContent = translations[lang].about;
    
    // Education section
    document.querySelector('.div2 h3').textContent = translations[lang].education;

    document.querySelector('.div8 h2').textContent = translations[lang].habilities;

    document.querySelector('.div3 p').textContent = translations[lang].educationText;

    // Skills section
    document.querySelector('.div4 h3').textContent = translations[lang].skills;
    document.querySelector('.div5 p').textContent = translations[lang].skillsText;

    // Languages section
    document.querySelector('.div6 h3').textContent = translations[lang].languages;
    document.querySelector('.div7 p').textContent = translations[lang].languagesText;

    // Professional Competencies section
    document.querySelector('.div9 h3').textContent = translations[lang].professionalCompetencies;
    document.querySelector('.div10 p').textContent = translations[lang].competenciesText;

    // Technical Knowledge section
    document.querySelector('.div11 h3').textContent = translations[lang].technicalKnowledge;
    document.querySelector('.div12 p').textContent = translations[lang].technicalText;

    // Download CV button
    document.querySelector('.dw-button .button__text').textContent = translations[lang].downloadCV;
}
