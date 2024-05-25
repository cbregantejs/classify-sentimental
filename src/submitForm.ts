export function submitForm(comment: string) {
  if (comment.length < 1) {
    return;
  }
  console.log(comment);

  fetch('https://skipface-bowslmmysa-uc.a.run.app/classify-sentimental', {
  // fetch('http://demo3163993.mockable.io/classify-sentimental', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: comment }),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the API response here
      console.log(data.response);
      const success_response = ['POSITIVO', 'NEUTRO'];
      const response: string = data.response.replace(/\n/g, '').trim();

      if (success_response.includes(response)) {
        const form = document.querySelector('.card-form')!;
        form.innerHTML = `
          <h3>¡Gracias por tu comentario!</h3>
          <p>Compartelo en Twitter:</p>
          <a href="https://twitter.com/intent/tweet?text=${comment}%20%40yancel_salinas" 
            class="btn-twitter" target="_blank">Tweet</a>
          
          <a href="" class="back-link">Nuevo comentario</a>
        `;
      }else{
        if (response === 'NEGATIVO') {
          alert('Censuramos  la libertad de expresión')
        }else{
          alert(data.response);        
        }
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the API request
      console.error(error);
    });
}
