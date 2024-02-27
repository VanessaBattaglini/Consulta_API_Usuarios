const urlApi = 'https://randomuser.me/api/?results=10';

(async function getData() {
    const respuesta = await fetch(urlApi);
    const { results } = await respuesta.json();
    console.log(results)

    let mostrarDatos = '';
    let user = document.getElementById('user-data');

    results.forEach(item => {
        mostrarDatos += `
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <img src="${item.picture.large}" class="card-img-top">
            <p class="p-2 text-primary">${item.name.first} - ${item.name.last}</p>
            <p class="p-2 text-danger">${item.email}</p>
            <p class="p-2 text-success">${item.cell}</p>
        </div>
        `;
            
    });
    user.innerHTML = mostrarDatos;

})();

