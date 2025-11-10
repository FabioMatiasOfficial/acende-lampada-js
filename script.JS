const lampada = document.getElementById("lampada");

lampada.addEventListener("mouseover",acender);
lampada.addEventListener("mouseout",apagar);

function acender(){
    lampada.src = "download__1_-removebg-preview.png";
    document.body.style.background = "#ff0000ff"
}
function apagar(){
    lampada.src = "download-removebg-preview.png";
    document.body.style.background = "#0004ffff"
}