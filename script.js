
window.addEventListener('keydown',(e) => {
    const buttons = document.querySelector(`div[data-key="${e.keyCode}"]`); //making itself into its own variable
    buttons.classList.add('playing');
    console.log(e);
})

var cursor = true;
var speed= 250;

setInterval(() => {
  if (cursor) { document.getElementById('cursor').style.opacity =0;
  cursor = false;
}else {        document.getElementById('cursor').style.opacity = 1;
  cursor = true;
      }
}, speed);



