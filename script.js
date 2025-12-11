// --- Data Destinasi Lengkap Sobat NTT ---
// Data ini diakses menggunakan ID yang sama dengan yang ada di panggilan fungsi onclick di file HTML.
const dataNTT = {
    wisata: [
        {
            id: 1, // Danau Kelimutu (ID yang dipanggil oleh tombol di HTML)
            nama: "Danau Kelimutu (Flores)",
            deskripsi: "Tiga danau kawah dengan warna air yang selalu berubah. Keajaiban geologi yang sakral, tempat peristirahatan jiwa-jiwa menurut kepercayaan lokal. Deskripsi panjang: Danau Kelimutu adalah salah satu keajaiban alam paling terkenal di Indonesia, terletak di Gunung Kelimutu dekat kota Moni, Flores. Keunikan danau ini terletak pada tiga kawahnya yang secara periodik dapat berubah warna karena aktivitas geologis. Penduduk lokal meyakini setiap kawah adalah tempat berkumpulnya roh yang berbeda. Kunjungan terbaik adalah saat matahari terbit.",
            rating: 4.8,
            price: "Rp 50.000",
            hours: "05:00 - 18:00 WITA",
            favorite: true,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/hG22WRfyTeHmjmyN9", 
            bandara: "Bandara H. Hasan Aroeboesman (Ende)",
            distance: "60 km",
            time: "1 jam 30 menit berkendara",
        },
        {
            id: 2, // Taman Nasional Komodo
            nama: "Taman Nasional Komodo",
            deskripsi: "Habitat asli Komodo, kadal terbesar di dunia. Wajib dikunjungi untuk trekking dan melihat komodo dari dekat. Deskripsi panjang: Taman Nasional Komodo adalah Situs Warisan Dunia UNESCO yang mencakup Pulau Komodo, Rinca, dan Padar. Selain habitat Komodo, destinasi ini menawarkan keindahan bawah laut yang luar biasa untuk snorkeling dan diving. Puncak Padar memberikan panorama tiga teluk ikonik. Wisatawan harus didampingi oleh Ranger demi keamanan.",
            rating: 4.9,
            price: "Rp 150.000 (Domestik)",
            hours: "07:00 - 17:00 WITA",
            favorite: true,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/BMAq6wL77gMUyVeo6", 
            bandara: "Bandara Komodo (Labuan Bajo)",
            distance: "30 km (ke Pelabuhan)",
            time: "45 menit ke Pelabuhan",
        },
        {
            id: 3, // Pantai Pink
            nama: "Pantai Pink (Flores)",
            deskripsi: "Salah satu dari sedikit pantai berpasir merah muda di dunia, terletak di Pulau Komodo. Deskripsi panjang: Warna merah muda pada pasir Pantai Pink berasal dari serpihan koral merah yang bercampur dengan pasir putih. Pemandangan kontras antara pasir pink, air biru kehijauan, dan perbukitan hijau menjadikannya spot foto yang sangat indah. Pantai ini juga memiliki kehidupan laut yang kaya dan tenang, cocok untuk berenang dan bersantai.",
            rating: 4.7,
            price: "Termasuk biaya masuk TN Komodo",
            hours: "Sepanjang Hari",
            favorite: false,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/CZTCbEUCgFPWvZS78", 
            bandara: "Bandara Komodo (Labuan Bajo)",
            distance: "Di Pulau Komodo, dijangkau dengan perahu",
            time: "1.5 - 2 jam perjalanan laut",
        },
        {
            id: 4, // Desa Adat Bena
            nama: "Desa Adat Bena (Flores)",
            deskripsi: "Desa tradisional suku Ngada yang tersusun megah dengan rumah adat beratap alang-alang di kaki gunung Inerie. Deskripsi panjang: Desa Bena adalah desa megalitik yang masih mempertahankan struktur sosial dan adat leluhur mereka. Desa ini berbentuk perahu yang diyakini sebagai simbol keselamatan dari banjir. Di tengah desa terdapat batu-batu persembahan dan rumah adat yang indah. Mengunjungi Bena memberikan pengalaman budaya yang mendalam tentang kehidupan masyarakat adat Flores.",
            rating: 4.6,
            price: "Donasi Sukarela (±Rp 25.000)",
            hours: "08:00 - 17:00 WITA",
            favorite: false,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/q2bk6GviiiaHEJtL9", 
            bandara: "Bandara Bajawa (Ngada)",
            distance: "18 km",
            time: "30 menit berkendara",
        },
        // Tambahkan lebih banyak item wisata di sini...
    ],
    kuliner: [
        {
            id: 5, // Se'i Sapi Kupang
            nama: "Se'i Sapi Kupang",
            deskripsi: "Daging sapi asap khas Kupang yang diiris tipis, disajikan dengan sambal Lu'at yang pedas menggigit. Deskripsi panjang: Se'i Sapi adalah teknik mengolah daging dengan cara diasapi menggunakan kayu khusus, menghasilkan aroma smoky yang sangat khas. Potongan daging disajikan tipis dan lembut. Sambal Lu'at adalah pendamping wajib yang terbuat dari cabai, daun jeruk, dan bumbu fermentasi, memberikan rasa segar dan pedas yang unik. Merupakan ikon kuliner NTT.",
            rating: 4.6,
            price: "Rp 35.000 - 50.000/porsi",
            hours: "10:00 - 22:00 WITA",
            favorite: true,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/ngZhnqB6ngjAX1s78", 
            bandara: "Bandara El Tari (Kupang)",
            distance: "10 km",
            time: "20 menit berkendara",
        },
        {
            id: 6, // Warung Raja Rasa
            nama: "Warung Raja Rasa",
            deskripsi: "Tempat makan spesialis yang menyajikan hidangan otentik khas Nusa Tenggara Timur (NTT), dengan menu andalan seperti Se'i Sapi (daging sapi asap) dan sambal khas, menawarkan cita rasa daerah yang gurih dan kuat.",
            rating: 4.5,
            price: "Rp 50.000 - 100.000/porsi",
            hours: "16:00 - 00:00 WITA",
            favorite: false,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/XDbvvuYrshkJ6gw39", 
            bandara: "Bandara Frans Seda (Maumere)",
            distance: "422 km",
            time: "40 menit penerbangan",
        },
        {
            id: 7, // Ikan Kuah Asam Inspirasi
            nama: "Ikan Kuah Asam Inspirasi",
            deskripsi: "Ikan Kuah Asam khas NTT adalah hidangan berkuah bening dan segar yang menonjolkan rasa asam alami dari belimbing wuluh atau tomat, dipadukan dengan pedasnya cabai rawit dan daging ikan laut yang segar.",
            rating: 4.5,
            price: "Rp 20.000 - 50.000/porsi",
            hours: "08:00 - 22:00 WITA",
            favorite: false,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/HGbW5EPu86BXuuXR7", 
            bandara: "Bandara El Tari (Kupang)",
            distance: "8 km",
            time: "20 menit berkendara",
        },
        // Tambahkan lebih banyak item kuliner di sini...
    ],
    oleholeh: [
        {
            id: 9, // Kain Tenun Ikat Sumba
            nama: "Kain Tenun Ikat Sumba",
            deskripsi: "Kain tenun dengan motif kuda, burung, atau hewan laut yang mewah dan proses pembuatan yang memakan waktu berbulan-bulan. Deskripsi panjang: Tenun Ikat Sumba adalah salah satu tenun paling berharga di Indonesia. Dibuat dengan teknik ikat yang rumit dan pewarna alami, setiap motif menceritakan legenda atau status sosial. Tenun ini tidak hanya suvenir, tetapi juga investasi budaya. Anda dapat membeli langsung dari pengrajin atau di galeri resmi.",
            rating: 1.5,
            price: "Rp 2.000.000 - Rp 10.000.000",
            hours: "07:00 - 17:00 WITA",
            favorite: true,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/YNriYWJ7uxMi7hgM7", 
            bandara: "Bandara El Tari (Kupang)",
            distance: "12 km",
            time: "25 menit berkendara",
        },
        {
            id: 10, // Kopi Flores Bajawa
            nama: "Kopi Flores Bajawa",
            deskripsi: "Biji kopi Arabika organik yang ditanam di tanah vulkanik Bajawa, dikenal dengan rasa nutty dan aroma floral. Deskripsi panjang: Kopi Bajawa sangat diminati di pasar internasional karena ditanam di dataran tinggi Bajawa tanpa menggunakan pupuk kimia. Profil rasanya cenderung medium body dengan sedikit sentuhan rempah dan earthy. Kopi ini adalah buah tangan ideal bagi pecinta kopi sejati, tersedia dalam bentuk biji atau bubuk.",
            rating: 4.5,
            price: "Rp 25.000 - Rp 75.000/kemasan",
            hours: "09:00 - 23:30 WITA",
            favorite: true,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/f3tpmaKwRsybZhfW6", 
            bandara: "Bandara Bajawa (Ngada)",
            distance: "70 km",
            time: "1 jam 45 menit berkendara",
        },
        {
            id: 11, // Sasando Miniatur
            nama: "Sasando Miniatur",
            deskripsi: "Alat musik petik khas Rote, diukir dalam bentuk kecil yang mudah dibawa sebagai hiasan. Deskripsi panjang: Sasando adalah alat musik tradisional dari Pulau Rote yang terbuat dari bambu dan daun lontar. Miniaturnya merupakan cinderamata populer yang menggambarkan kekayaan budaya NTT. Anda dapat membelinya di pusat oleh-oleh di Kupang. Perhatikan kualitas ukiran dan bahan bakunya.",
            rating: 5.0,
            price: "Rp 300.000 - Rp 550.000",
            hours: "08:00 - 19:00 WITA",
            favorite: false,
            // GANTI DENGAN URL GOOGLE MAPS ASLI ANDA
            maps_url: "https://maps.app.goo.gl/PbU82ra3sitk5vgz7", 
            bandara: "Bandara El Tari (Kupang)",
            distance: "15 km",
            time: "30 menit berkendara",
        },
        // Tambahkan lebih banyak item oleh-oleh di sini...
    ],
    penginapan: [
        {
            id: 13, // Ayana Komodo Resort
            nama: "Ayana Komodo Resort",
            deskripsi: "Resort bintang lima yang mewah dengan pemandangan langsung ke perairan Labuan Bajo. Fasilitas lengkap dan pelayanan premium. Deskripsi panjang: Ayana menawarkan pengalaman menginap yang eksklusif, terletak di Waecicu Beach, menjadikannya basis sempurna untuk menjelajahi TN Komodo dengan gaya. Memiliki private jetty dan kapal pesiar mewah. Pilihan ideal bagi yang mencari kemewahan dan privasi di Flores.",
            rating: 4.8,
            price: "Rp 3.500.000/malam mulai",
            hours: "Check-in 14:00, Check-out 12:00",
            favorite: true,
            // LINK LANGSUNG KE HALAMAN HOTEL DI TIKET.COM
            tiket_url: "https://www.tiket.com/id-id/hotel/indonesia/plataran-komodo-resort-spa-601001675046459685?adult=1&room=1&source=global_search", 
        },
        {
            id: 14, // Nihi Sumba
            nama: "Nihi Sumba",
            deskripsi: "Resort paling eksklusif di Sumba, dikenal sebagai salah satu hotel terbaik di dunia dengan konsep 'Unscripted Adventure'. Deskripsi panjang: Nihi Sumba bukan hanya tempat menginap, tetapi sebuah destinasi. Terkenal dengan kuda-kuda sandelwood yang berlari bebas di pantai dan ombak 'Left-Hander' yang legendaris. Resort ini sangat fokus pada pengalaman lokal dan keberlanjutan. Harga sangat premium.",
            rating: 4.9,
            price: "Rp 15.000.000/malam mulai",
            hours: "Check-in 14:00, Check-out 11:00",
            favorite: true,
            // LINK LANGSUNG KE HALAMAN HOTEL DI TIKET.COM
            tiket_url: "https://www.tiket.com/id-id/hotel/indonesia/nihi-sumba-member-leading-hotels-of-the-world-707001721284817170?adult=1&room=1&source=global_search",
        },
        {
            id: 15, // Swiss-Belinn Kristal Kupang
            nama: "Swiss-Belinn Kristal Kupang",
            deskripsi: "Hotel bisnis dan liburan yang strategis di Kupang dengan fasilitas modern, kolam renang, dan akses mudah ke pantai. Deskripsi panjang: Terletak di dekat pusat kota, hotel ini menawarkan kenyamanan standar internasional. Cocok untuk pelancong bisnis maupun keluarga. Memiliki restoran, bar, dan kamar dengan pemandangan laut. Ideal sebagai titik awal eksplorasi Pulau Timor.",
            rating: 4.2,
            price: "Rp 650.000/malam mulai",
            hours: "Check-in 14:00, Check-out 12:00",
            favorite: false,
            // LINK LANGSUNG KE HALAMAN HOTEL DI TIKET.COM
            tiket_url: "https://www.tiket.com/id-id/hotel/indonesia/kristal-hotel-kupang-702001708916647553?adult=1&room=1&source=global_search",
        },
        // Tambahkan lebih banyak item penginapan di sini...
    ],
};

// --- FUNGSI PENCARIAN DATA ---

/**
 * Mencari item berdasarkan ID dan Kategori.
 */
function findItem(id, category) {
    if (dataNTT[category]) {
        // ID di dataNTT adalah angka, jadi konversi ID dari HTML menjadi angka
        return dataNTT[category].find(item => item.id === parseInt(id));
    }
    return null;
}

// --- FUNGSI MODAL/POPUP (Untuk tombol 'Deskripsi & Detail') ---

const modal = document.getElementById("detailModal");
const closeButton = document.querySelector(".close-button");

/**
 * Menampilkan Modal detail item.
 */
function openDetailModal(id, category) {
    const item = findItem(id, category);

    if (!item) return;

    // Set konten modal
    document.getElementById('modal-title').textContent = item.nama;
    document.getElementById('modal-description').textContent = item.deskripsi; 
    document.getElementById('modal-rating').textContent = `${item.rating} / 5.0`;
    document.getElementById('modal-price').textContent = item.price;
    document.getElementById('modal-hours').textContent = item.hours;

    const distanceElement = document.getElementById('modal-distance');
    const timeElement = document.getElementById('modal-time');

    // Menampilkan info Jarak/Waktu hanya jika tersedia (Wisata, Kuliner, Oleh-Oleh)
    if (item.bandara) {
        distanceElement.parentElement.style.display = 'block';
        timeElement.parentElement.style.display = 'block';
        distanceElement.textContent = `${item.distance} dari ${item.bandara}`;
        timeElement.textContent = item.time;
    } else {
        // Sembunyikan untuk Penginapan
        distanceElement.parentElement.style.display = 'none';
        timeElement.parentElement.style.display = 'none';
    }

    // Info Favorit
    document.getElementById('modal-favorite').textContent = item.favorite ? '*** PILIHAN FAVORIT PENGUNJUNG ***' : '';

    modal.style.display = "block";
}

// Menutup modal saat tombol silang diklik
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Menutup modal saat klik di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- FUNGSI TOMBOL AKSI: GOOGLE MAPS ---

/**
 * Membuka link Google Maps (Wisata, Kuliner, Oleh-Oleh).
 */
function openMaps(id, category) {
    const item = findItem(id, category);
    if (item && item.maps_url) {
        // Membuka URL Maps di tab/aplikasi baru
        window.open(item.maps_url, '_blank');
    } else {
        alert(`Lokasi Google Maps untuk ${item.nama || 'item ini'} belum tersedia atau URL salah.`);
    }
}

// --- FUNGSI TOMBOL AKSI: TIKET.COM ---

/**
 * Membuka link hotel spesifik di Tiket.com (khusus Penginapan).
 */
function openTiket(id, category) {
    const item = findItem(id, category);
    
    // Pastikan item ditemukan dan memiliki URL tiket.com
    if (item && item.tiket_url) {
        window.open(item.tiket_url, '_blank');
    } 
    // Jika tidak, arahkan ke beranda Tiket.com sesuai permintaan Anda
    else {
        window.open('https://www.tiket.com/', '_blank'); 
    }
}

// --- INISIALISASI ---
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan semua event listener di HTML sudah siap saat dokumen dimuat.
    console.log("Sobat NTT Script Loaded. Tombol siap diklik!");
});