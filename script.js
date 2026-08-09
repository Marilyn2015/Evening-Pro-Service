// Year in footer
(function(){ var y=document.getElementById("y"); if(y) y.textContent=new Date().getFullYear(); })();

// Header solidifies on scroll
(function(){
  var h=document.getElementById("site-header");
  if(!h) return;
  var onScroll=function(){ h.classList.toggle("scrolled", window.scrollY>8); };
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
})();

// Scroll reveals
(function(){
  var items=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ items.forEach(function(el){ el.classList.add("in"); }); return; }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var el=e.target;
        var sibs=el.parentElement?Array.prototype.indexOf.call(el.parentElement.children, el):0;
        setTimeout(function(){ el.classList.add("in"); }, Math.min(sibs,6)*70);
        io.unobserve(el);
      }
    });
  }, { threshold:0.14, rootMargin:"0px 0px -6% 0px" });
  items.forEach(function(el){ io.observe(el); });
})();

// Mark active nav link by filename
(function(){
  var path=(location.pathname.split("/").pop()||"index.html");
  document.querySelectorAll(".nav-links a").forEach(function(a){
    var href=a.getAttribute("href")||"";
    if(href===path || (path==="" && href==="index.html")) a.classList.add("active");
  });
})();
