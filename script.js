function openLetter() {

    const letter = document.getElementById("letterContainer");
    const lidShadow = document.getElementById("openingWrapper");
    const lid = document.getElementById("lidContainer");

    const seal = document.getElementById("sealWrapper");
    const middleSeal = document.getElementById("middleSeal");
    const backSeal = document.getElementById("backSeal");
    const frontSeal = document.getElementById("frontSeal");

    const glowEffect1 = document.getElementById("leftShadow")
    const glowEffect2 = document.getElementById("rightShadow")
    const glowEffect3 = document.getElementById("bottomShadow")

    lid.style.animation = "openLetter 5s forwards ease-out";

    lidShadow.style.animation = "fadeLidShadow 5s forwards ease-out";

    seal.style.animation = "sealOpening 5s forwards ease-out";

    middleSeal.style.animation = "showMiddle 5s forwards ease-out";
    
    backSeal.style.animation = "rotateSeal1 5s forwards ease-out,  moveSeal 5s forwards ease-out";

    frontSeal.style.animation = "rotateSeal2 5S forwards ease-out";


    /*glowEffect1.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect1.style.animationDelay = "2s";
    glowEffect2.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect2.style.animationDelay = "2s";
    glowEffect3.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect3.style.animationDelay = "2s";

    letter.style.animation = "closeUp 1s ease-in-out forwards";*/
    }
