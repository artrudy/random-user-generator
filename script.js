function fetchUser (){
  showSpinner()
  fetch('https://randomuser.me/api/')
  .then(response => {
  return response.json()
})
.then((data) => {
  hideSpinner();
  displayUser(data.results[0]);
})
}
function displayUser(user){
  const userDisplay = document.querySelector('#user')
  document.body.style.backgroundColor = user.gender === 'female'? 'rebeccapurple': 'steelblue';

  userDisplay.innerHTML = `<div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span id="name" class="font-bold">Name: </span> ${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span id="email" class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span id="phone" class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span id="location" class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p id="age" class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>`
}
fetchUser()

document.querySelector('#generate').addEventListener('click', fetchUser)

function showSpinner(){
  document.querySelector('.spinner').style.display = 'block'
}

function hideSpinner(){
  setTimeout(document.querySelector('.spinner').style.display = 'none'), 1000
}

