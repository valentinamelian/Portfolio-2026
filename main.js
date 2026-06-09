(function(){var c=document.getElementById("cs-mdz_c");var s=c.querySelectorAll(".cs-slide");var i=0;setInterval(function(){s[i].style.display="none";i=(i+1)%s.length;s[i].style.display="block";},2800);})();
(function(){var c=document.getElementById("cs-cm_c");var s=c.querySelectorAll(".cs-slide");var i=0;setInterval(function(){s[i].style.display="none";i=(i+1)%s.length;s[i].style.display="block";},2800);})();
(function(){var c=document.getElementById("cs-jm_c");var s=c.querySelectorAll(".cs-slide");var i=0;setInterval(function(){s[i].style.display="none";i=(i+1)%s.length;s[i].style.display="block";},2800);})();

const cur=document.getElementById('cur');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';});
document.querySelectorAll('a,button,.svc-row,.brand-pill,.wc').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>50));
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:.08});
document.querySelectorAll('.reveal,.rev-l,.rev-r').forEach(el=>io.observe(el));
let cur_open=null;
function toggleCard(id){
  const panel=document.getElementById('work-panel');
  document.querySelectorAll('.pc').forEach(p=>p.style.display='none');
  document.querySelectorAll('.wc').forEach(c=>c.classList.remove('open'));
  if(cur_open)document.getElementById('btn-'+cur_open).textContent='Open ↓';
  if(cur_open===id){panel.classList.remove('open');cur_open=null;return;}
  document.getElementById('panel-'+id).style.display='block';
  document.getElementById('card-'+id).classList.add('open');
  document.getElementById('btn-'+id).textContent='Close ↑';
  panel.classList.add('open');cur_open=id;
  setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'nearest'}),120);
}
function closePanel(){
  document.getElementById('work-panel').classList.remove('open');
  document.querySelectorAll('.wc').forEach(c=>c.classList.remove('open'));
  document.querySelectorAll('.pc').forEach(p=>p.style.display='none');
  if(cur_open){document.getElementById('btn-'+cur_open).textContent='Open ↓';cur_open=null;}
}
function toggleMore(btn){
  const p=document.getElementById('more-vids');p.classList.toggle('open');
  btn.textContent=p.classList.contains('open')?'Less videos ↑':'More videos ↓';
}
function setLink(id,e){
  e.preventDefault();e.stopPropagation();
  const url=prompt('Paste the website URL:');
  if(url&&url.trim()){const el=document.getElementById(id);el.href=url.trim();el.target='_blank';el.textContent='↗ Visit website';el.classList.remove('out');}
}
