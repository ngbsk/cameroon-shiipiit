// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// ---- i18n FR/EN ----
const TITLES = {
  fr: "shiipiit — Sourcing tech & électroménager depuis la Chine",
  en: "shiipiit — Tech & home-appliance sourcing from China"
};
const langBtn = document.getElementById('langBtn');
function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr]').forEach(el=>{ el.textContent = el.getAttribute('data-'+lang); });
  document.querySelectorAll('[data-fr-html]').forEach(el=>{ el.innerHTML = el.getAttribute('data-'+lang+'-html'); });
  document.title = TITLES[lang];
  langBtn.textContent = (lang === 'fr') ? 'EN' : 'FR';
  // Re-measure any open FAQ answer (text length changed)
  document.querySelectorAll('.faq-item.open .faq-a').forEach(a=>{ a.style.maxHeight = a.scrollHeight + 'px'; });
  try{ localStorage.setItem('lang', lang); }catch(e){}
}
let startLang = 'fr';
try{ startLang = localStorage.getItem('lang') || 'fr'; }catch(e){}
langBtn.addEventListener('click', ()=> setLang(document.documentElement.lang === 'fr' ? 'en' : 'fr'));
setLang(startLang);

// Header border on scroll
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 8);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

// Reveal on intersection (with stagger for children)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    if(el.classList.contains('stagger')){
      [...el.children].forEach((c,i)=>{ c.style.transitionDelay = (i*90)+'ms'; });
    }
    io.unobserve(el);
  });
},{threshold:.15});
document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el));

// Fire hero reveals immediately on load
window.addEventListener('load',()=>{
  document.querySelectorAll('.hero .reveal,.hero .stagger').forEach((el,i)=>{
    setTimeout(()=>{
      el.classList.add('in');
      if(el.classList.contains('stagger'))[...el.children].forEach((c,j)=>c.style.transitionDelay=(j*90)+'ms');
    }, 120 + i*90);
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item = q.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o=>{
      o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Parallax drift on the background orbs
const orbs = document.querySelectorAll('.orb');
let tx=0,ty=0,cx=0,cy=0;
window.addEventListener('mousemove',(e)=>{
  tx=(e.clientX/window.innerWidth-.5); ty=(e.clientY/window.innerHeight-.5);
});
(function drift(){
  cx += (tx-cx)*.05; cy += (ty-cy)*.05;
  orbs.forEach((o,i)=>{ const d=(i+1)*22; o.style.transform=`translate(${cx*d}px,${cy*d}px)`; });
  requestAnimationFrame(drift);
})();
