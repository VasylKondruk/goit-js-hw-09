const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),r.addEventListener("click",(function(){clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.945f412c.js.map
