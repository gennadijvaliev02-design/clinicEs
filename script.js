const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
toggle.addEventListener('click',()=>{
  const isOpen=toggle.getAttribute('aria-expanded')==='true';
  toggle.setAttribute('aria-expanded',String(!isOpen));
  toggle.setAttribute('aria-label',isOpen?'Abrir menú':'Cerrar menú');
  nav.classList.toggle('is-open',!isOpen);
});
nav.addEventListener('click',event=>{
  if(event.target.closest('a')){
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menú');
    nav.classList.remove('is-open');
  }
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menú');
    nav.classList.remove('is-open');
    toggle.focus();
  }
});
