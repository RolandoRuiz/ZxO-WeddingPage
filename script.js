function openLetter() {

    const letter = document.getElementById("letterContainer");
    const lidShadow = document.getElementById("openingWrapper");
    const lid = document.getElementById("lidContainer");
    const seal = document.getElementById("seal")
    const seal2 = document.getElementById("lidSealContainer");
    const glowEffect1 = document.getElementById("leftShadow")
    const glowEffect2 = document.getElementById("rightShadow")
    const glowEffect3 = document.getElementById("bottomShadow")

    seal2.style.animation = "indexSeal 1.5s forwards ease-out";
    seal2.style.animationDelay = "200ms";
    seal.style.animation = "rotateSeal 1.5s forwards ease-out";
    seal.style.animationDelay = "200ms";
    lid.style.animation = "openLetter 1.5s forwards ease-out";
    lid.style.animationDelay = "200ms";
    lidShadow.style.animation = "fadeLidShadow 1.5s forwards ease-out";
    lidShadow.style.animationDelay = "200ms";
    /*glowEffect1.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect1.style.animationDelay = "2s";
    glowEffect2.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect2.style.animationDelay = "2s";
    glowEffect3.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect3.style.animationDelay = "2s";*/

    letter.style.animation = "closeUp 1s ease-in-out forwards";
    }
