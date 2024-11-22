let clickCount = 0;
const maxClicks = 3;

const openMessageBtn = document.getElementById('open-message-btn');
const birthdayMessage = document.getElementById('birthday-message');
const birthdayAudio = document.getElementById('birthday-audio');
const closeMessageBtn = document.getElementById('close-message-btn');

openMessageBtn.addEventListener('click', function() {
    // Pindahkan tombol ke posisi acak
    if (clickCount < maxClicks) {
        moveButtonRandomly();
        clickCount++;
    }

    // Jika sudah 3 kali klik, tampilkan pesan dan mainkan musik
    if (clickCount === maxClicks) {
        birthdayMessage.style.display = 'block';
        birthdayAudio.play();
        openMessageBtn.style.display = 'none'; // Menyembunyikan tombol setelah 3 klik
    }
});

// Menutup pesan dan menghentikan musik
closeMessageBtn.addEventListener('click', function() {
    birthdayMessage.style.display = 'none';
    openMessageBtn.style.display = 'block';
    birthdayAudio.pause();
    birthdayAudio.currentTime = 0; // Mengulang lagu dari awal
});

// Fungsi untuk memindahkan tombol ke posisi acak
function moveButtonRandomly() {
    const container = document.getElementById('birthday-message-container');
    const maxWidth = container.offsetWidth - openMessageBtn.offsetWidth;
    const maxHeight = container.offsetHeight - openMessageBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    openMessageBtn.style.left = randomX + 'px';
    openMessageBtn.style.top = randomY + 'px';
}
document.getElementById('open-message-btn').addEventListener('click', function() {
    // Menampilkan ucapan
    document.getElementById('birthday-message').style.display = 'block';

    // Memutar audio
    var audio = document.getElementById('birthday-audio');
    audio.play();  // Memulai pemutaran lagu

    // Menyembunyikan tombol "Buka Ucapan"
    this.style.display = 'none';
});

document.getElementById('close-message-btn').addEventListener('click', function() {
    // Menyembunyikan ucapan
    document.getElementById('birthday-message').style.display = 'none';

    // Menampilkan tombol "Buka Ucapan"
    document.getElementById('open-message-btn').style.display = 'block';

    // Menjeda dan mengulang lagu
    var audio = document.getElementById('birthday-audio');
    audio.pause();  // Menjeda lagu
    audio.currentTime = 0;  // Mengulang lagu dari awal
