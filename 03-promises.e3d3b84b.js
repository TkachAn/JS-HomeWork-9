const o=document.forms[0];console.log(o);const e=o.delay;console.log(e);const l=o.step;console.log(l);const n=o.amount;console.log(n);const s=o.elements[3];console.log(s),e.value=3e3,s.addEventListener("click",(()=>{let o=0,e=setInterval((()=>{o++,console.log("setTimeout delay",o),o>9&&clearInterval(e)}),l);console.log("counter",e)}));
//# sourceMappingURL=03-promises.e3d3b84b.js.map
