// função para abrir menuMobile
function openMenu() {
  document.getElementById("menuMobile").classList.toggle("change");
  document.getElementById("navLinks").classList.toggle("change");
  document.getElementById("bg").classList.toggle("change");
 
}
// função para abrir menuMobile

// função btn dark mode
const chk = document.getElementById('chk');
chk.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})

// função btn dark mode

// função texto digitado
new TypeIt("#typingText", {
  speed: 100,
  loop: true,
  waintUntilVisible: true,
}).type('Desenvolvedor Front-End', { delay: 2000 }).delete(9).type(' Web Designer', { delay: 2000 })
  .go();
// função texto digitado

// função para mostrar links
function mostrarLinKs(){
document.getElementById('footer').classList.toggle('change');
document.getElementById('menuMobile').classList.remove('change');
document.getElementById('navLinks').classList.remove('change');
document.getElementById('bg').classList.remove('change');
}
// função para mostrar links