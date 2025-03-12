
const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=500&fit=crop"
];

let currentIndex = 0;


const sliderImage = document.getElementById("slider-image");


function updateImage() {
    sliderImage.src = images[currentIndex];
}


updateImage();

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});


document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
