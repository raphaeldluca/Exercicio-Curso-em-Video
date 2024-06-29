function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var minuto = data.getMinutes();
  var hora = 21;
  hora = ("0" + hora).slice(-2);
  minuto = ("0" + minuto).slice(-2);
  msg.innerHTML = `Agora são ${hora}:${minuto}. <br> `;
  if (hora >= 5 && hora < 12) {
    img.src = "manha.png";
    document.body.style.background = "#96b4e0";
    msg.innerHTML += "Bom dia!";
  } else if (hora >= 0 && hora <= 5) {
    img.src = "noite.png";
    document.body.style.background = "#07043b";
    msg.innerHTML += "Boa madrugada!";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.png";
    document.body.style.background = "#e99b25";
    msg.innerHTML += "Boa tarde!";
  } else {
    img.src = "noite.png";
    document.body.style.background = "#07043b";
    msg.innerHTML += "Boa noite!";
  }
}
