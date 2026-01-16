// Menambahkan interaktivitas sederhana
const btn = document.getElementById('colorBtn');
const body = document.body;

const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
];

let colorIndex = 0;

btn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    body.style.background = colors[colorIndex];
});

// Pesan sambutan di konsol
console.log("Website berhasil dimuat! Selamat mencoba GitHub Pages.");
