(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="/classify-sentimental/assets/python-BokziSbf.png",a="/classify-sentimental/assets/gemini-CUUwuBLi.png";function l(r){r.length<1||(console.log(r),fetch("https://skipface-bowslmmysa-uc.a.run.app/classify-sentimental",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r})}).then(o=>o.json()).then(o=>{console.log(o.response);const s=["POSITIVO","NEUTRO"],n=o.response.replace(/\n/g,"").trim();if(s.includes(n)){const e=document.querySelector(".card-form");e.innerHTML=`
          <h3>¡Gracias por tu comentario!</h3>
          <p>Compartelo en Twitter:</p>
          <a href="https://twitter.com/intent/tweet?text=${r}%20%40yancel_salinas" 
            class="btn-twitter" target="_blank">Tweet</a>
          
          <a href="" class="back-link">Nuevo comentario</a>
        `}else alert("Censuramos  la libertad de expresión")}).catch(o=>{console.error(o)}))}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${c}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Skip Face</h1>
    <div class="card-form">
      <label for="comment">Escribe un comentario:</label>
      <textarea id="comment" name="comment"></textarea>
      <button id="btnSubmit"  type="button">Enviar</button>
    </div>
  </div>
`;const u=document.querySelector("#comment"),p=document.querySelector("#btnSubmit");p.addEventListener("click",()=>{l(u.value)});
