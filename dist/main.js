(()=>{"use strict";const e=[];document.getElementById("add-project-button").addEventListener("click",(()=>{const t={name:`${prompt("enter name","")}`,tasks:[]};if(""===t.name)return void alert("name cannot be empty");if("null"===t.name)return void alert("canceled");e.push(t);const n=document.createElement("button");n.classList.add("project-item"),n.innerHTML=`${t.name}`,document.getElementById("project-items").appendChild(n)})),document.getElementById("consoleBtn").addEventListener("click",(()=>{console.log(e)}))})();