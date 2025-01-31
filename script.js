function openLetter() {

    const letter = document.getElementById("letterContainer");
    const lidShadow = document.getElementById("lidShadow");
    const lid = document.getElementById("letterLidContainer");
    const glowEffect1 = document.getElementById("leftShadow")
    const glowEffect2 = document.getElementById("rightShadow")
    const glowEffect3 = document.getElementById("bottomShadow")

    lid.style.animation = "openLetter 1.5s forwards ease-out";
    lid.style.animationDelay = "200ms";
    lidShadow.style.animation = "noShadow 1.5s forwards ease-out";
    lidShadow.style.animationDelay = "200ms";
    glowEffect1.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect1.style.animationDelay = "2s";
    glowEffect2.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect2.style.animationDelay = "2s";
    glowEffect3.style.animation = "pulse 1s ease-in-out alternate infinite";
    glowEffect3.style.animationDelay = "2s";
    letter.style.animation = "closeUp 1s ease-in-out forwards";
}
