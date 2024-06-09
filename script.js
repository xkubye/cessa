let currentBanner = 0;
const banners = document.querySelectorAll('.banner-img');

function showNextBanner() {
    banners[currentBanner].style.display = 'none';
    currentBanner = (currentBanner + 1) % banners.length;
    banners[currentBanner].style.display = 'flex';
}

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
}

function navigateTo(page) {
    alert('Navigating to ' + page);
}

function navigateToProduct(url) {
    window.location.href = url;
}

function searchProduct() {
    const query = document.getElementById('searchInput').value;
    alert('Searching for ' + query);
}

setInterval(showNextBanner, 2000);

// Initialize banners
banners.forEach((banner, index) => {
    banner.style.display = index === 0 ? 'flex' : 'none';
});

function goShopping() {
    // Ganti link WhatsApp atau grup belanja Anda di bawah ini
    window.location.href = 'https://wa.me/qr/2DHMTX5AWCEYH1';
}

function navigateTo(page) {
    window.location.href = page;
}

function searchProduct() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    switch (query) {
        case 'free fire':
            window.location.href = 'index2.html';
            break;
        case 'mlbb':
            window.location.href = 'index3.html';
            break;
        case 'Honkai Star Rail':
            window.location.href = 'index4.html';
            break;
        case 'Genshin Impact':
            window.location.href = 'index5.html';
            break;
        case 'PUBG Mobile':
            window.location.href = 'index6.html';
            break;
        case 'Wuthering Waves':
            window.location.href = 'index7.html';
            break;
        // Tambahkan lebih banyak kasus sesuai kebutuhan
        default:
            alert('Halaman tidak ditemukan');
            break;
    }
}

document.getElementById('tiktok.com').addEventListener('click', function() {
    window.location.href = 'https://www.tiktok.com/@kubyee?_t=8n3i2I5tKSH&_r=1';
});

document.getElementById('instagram').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/xkubye_?igsh=MmtkYzVxeGM3Mmhj';
});

document.getElementById('facebook').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/share/yx14h9bUdgWbqmVv/?mibextid=qi2Omg';
});
