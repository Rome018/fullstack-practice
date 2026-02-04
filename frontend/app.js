fetch("http://localhost:3000/api/hello")
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML += `<p>${data.message}</p>`;
  })
  .catch(err => console.error(err));
