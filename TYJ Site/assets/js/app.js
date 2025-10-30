(function(){
  // year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  // reveal
  const rev=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  rev.forEach(el=>io.observe(el));
  // planner -> WhatsApp + server lead
  const form=document.getElementById('planner');
  form?.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    // Send to server CSV
    try{await fetch('lead.php',{method:'POST',body:new URLSearchParams(data)});}catch(err){console.warn('lead store failed',err)}
    // WhatsApp prefill
    const msg=encodeURIComponent(`Hi TYJ, I'd like to plan a trip to ${data.state} starting ${data.start} for ${data.length} days, ${data.trav} travelers.`);
    window.open(`https://wa.me/917434829124?text=${msg}`,'_blank');
    form.reset();
  });
})();
