import './style.css';
import pythonLlogo from './python.png';
import geminiLogo from './gemini.png';
import { submitForm } from './submitForm.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${geminiLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${pythonLlogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Skip Face</h1>
    <div class="card-form">
      <label for="comment">Escribe un comentario:</label>
      <textarea id="comment" name="comment"></textarea>
      <button id="btnSubmit"  type="button">Enviar</button>
    </div>
  </div>
`

const comment = document.querySelector<HTMLTextAreaElement>('#comment')!;
const btnSubmit = document.querySelector<HTMLButtonElement>('#btnSubmit')!;
btnSubmit.addEventListener('click', () => {
  submitForm(comment.value);
});
