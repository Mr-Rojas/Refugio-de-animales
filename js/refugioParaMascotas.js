//Aumentar mascotas
function aumentarMascotas(id) {
    const counter = document.getElementById(id);
    let currentCount = parseInt(counter.textContent)
    counter.textContent = `${++currentCount} petting(s)`;
}

//Eliminar botón Donante
document.getElementById("donarButton").addEventListener("click", function(){
    this.remove();
})

//Alerta cambio de mascota
document.getElementById("tipoMascota").addEventListener("change", function (){
    const selectedPet = this.value;
    alert(`You are looking for a: ${selectedPet}`);
})