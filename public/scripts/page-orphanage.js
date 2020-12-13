const options = {
   dragging: false,
   touchZoom: false,
   doubleClickZoom: false,
   scrollWheelZoom: false,
   zoomControl: false
}

const map = L.map('mapid', options).setView([-23.5317, -46.7899], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2]
})

L.marker([-23.5317, -46.7899], { icon })
.addTo(map)

function selectImage(event) {
   const button = event.currentTarget
   // remove a classe active
   const buttons = document.querySelectorAll(".images button")
   buttons.forEach(removeActiveClass)
   function removeActiveClass(button) {
      button.classList.remove("active")
   }
   // adiciona a classe active
   button.classList.add('active')
   // seleciona a imagem clicada
   const image = button.children[0]
   const imageContainer = document.querySelector(".orphanage-details > img")
   // atualiza o container img
   imageContainer.src = image.src
}