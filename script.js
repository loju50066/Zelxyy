document.addEventListener("DOMContentLoaded", loadGallery);

function uploadImage() {

    const fileInput = document.getElementById("uploadInput");

    const file = fileInput.files[0];

    if (!file) {

        alert("Pilih gambar terlebih dahulu!");

        return;

    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const imgData = e.target.result;

        saveImage(imgData);

        displayImage(imgData);

    };

    reader.readAsDataURL(file);

}

// Simpan gambar ke local storage

function saveImage(imgData) {

    let images = JSON.parse(localStorage.getItem("gallery")) || [];

    images.push(imgData);

    localStorage.setItem("gallery", JSON.stringify(images));

}

// Tampilkan gambar

function displayImage(imgData) {

    const gallery = document.getElementById("gallery");

    const imgElement = document.createElement("img");

    imgElement.src = imgData;

    gallery.appendChild(imgElement);

}

// Load gambar dari local storage

function loadGallery() {

    let images = JSON.parse(localStorage.getItem("gallery")) || [];

    images.forEach(displayImage);

}
document.addEventListener("DOMContentLoaded", loadGallery);

function uploadImage() {

    const fileInput = document.getElementById("uploadInput");

    const file = fileInput.files[0];

    if (!file) {

        alert("Pilih gambar terlebih dahulu!");

        return;

    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const imgData = e.target.result;

        // Cek apakah gambar sudah ada

        let images = JSON.parse(localStorage.getItem("gallery")) || [];

        if (images.includes(imgData)) {

            alert("Gambar ini sudah diunggah sebelumnya!");

            return;

        }

        saveImage(imgData);

        displayImage(imgData);

    };

    reader.readAsDataURL(file);

}

// Simpan gambar ke local storage

function saveImage(imgData) {

    let images = JSON.parse(localStorage.getItem("gallery")) || [];

    images.push(imgData);

    localStorage.setItem("gallery", JSON.stringify(images));

}

document.addEventListener("scroll", function () {

    let loveText = document.getElementById("loveText");

    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {

        loveText.classList.add("show-text");

    }

});