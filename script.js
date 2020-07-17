
window.addEventListener('keydown',(e) => {
    const buttons = document.querySelector(`div[data-key="${e.keyCode}"]`); //making itself into its own variable
    buttons.classList.add('playing');
    console.log(e);
})



