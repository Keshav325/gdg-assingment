function scrollToRegister(){
  document.getElementById("register").scrollIntoView({behavior:"smooth"});
}

/* Scroll Progress */
window.onscroll=function(){
  let winScroll=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById("progress").style.width=(winScroll/height)*100+"%";
};

/* Counter Animation */
const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const target=+counter.getAttribute('data-target');
  let count=0;
  const update=()=>{
    const inc=target/100;
    if(count<target){
      count+=inc;
      counter.innerText=Math.ceil(count);
      setTimeout(update,20);
    }else{
      counter.innerText=target;
    }
  };
  update();
});

/* FAQ Toggle */
document.querySelectorAll('.faq-question').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const ans=btn.nextElementSibling;
    ans.style.display=ans.style.display==="block"?"none":"block";
  });
});
