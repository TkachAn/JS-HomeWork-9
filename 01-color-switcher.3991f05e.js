!function(){var t=document.querySelector("body"),n=document.querySelector("button[ data-start]"),o=document.querySelector("button[ data-stop]"),e=null;function c(){var n="#".concat(a()).concat(a()).concat(a());return t.style="background-color: ".concat(n,";"),console.log("setHex:",n),n}function a(){return Math.round(256*Math.random()).toString(16).padStart(2,"0")}n.addEventListener("click",(function(){null===e&&(e=setInterval(c,1e3))})),o.addEventListener("click",(function(){clearInterval(e),console.log("Interval with id ".concat(e," has stopped!")),e=null}))}();
//# sourceMappingURL=01-color-switcher.3991f05e.js.map
