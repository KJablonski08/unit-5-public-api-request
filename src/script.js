
function getEmployee() {
   baseUrl = 'https://randomuser.me/api/?results=12'

   fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
         renderEmployee(data.results);
       })
       .catch((error) => {
         console.error('Error:', error);
       });

}
   
function renderEmployee(data) {
   employees = []

   let gallery = document.getElementById('gallery')
   let galleryObj = gallery.children
   
   for (i=0; i < data.length; i++) {
      const img = data[i].picture.large
      const firstName = data[i].name.first
      const lastName = data[i].name.last
      const email = data[i].email
      const city = data[i].location.city
      const state = data[i].location.state

      let html =
         `<div class="card" id="${i}">
            <div class="card-img-container">
               <img class="card-img" src="${img}" alt="profile picture">
            </div>
            <div class="card-info-container">
               <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
               <p class="card-text">${email}</p>
               <p class="card-text cap">${city}, ${state}</p>
            </div>
         </div>`
      employees.push(html)
   }

   gallery.innerHTML = employees;
   
   for (i=0; i< galleryObj.length; i++) {
      galleryObj[i].addEventListener('click', () => {
         console.log(galleryObj)
      })
   }

}

getEmployee();
