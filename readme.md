Nama : Muhammad Lutfi Syauqi Annafal
NIM : 24090110
Link Repository: https://github.com/Nafal3328/UTS_Muhammad-Lutfi-Syauqi-Annafal_24090110-
Link Pages : https://nafal3328.github.io/UTS_Muhammad-Lutfi-Syauqi-Annafal_24090110-/
Deskripsi :  UTS Pemrograman Web 1 - Toko "Latansa"

Project Ujian Tengah Semester mata kuliah Pemrograman Web 1 (D4 Teknik Informatika) ini bertujuan untuk mengonversi desain antarmuka (UI/UX) menjadi sebuah website fungsional menggunakan teknologi dasar **HTML**, **CSS** (dengan skema monokrom), dan **JavaScript**.

### Detail Mahasiswa
* **Nama:** Muhammad Lutfi Syauqi Annafal
* **NIM:** 24090110
* **Nama Toko:** Latansa

---

## Deskripsi Fungsi Tiap Halaman

### 1. Halaman Login (`index.html`)
Halaman awal yang berfungsi sebagai gerbang masuk sistem.
* **Fungsi JavaScript:** Melakukan validasi *input* kosong pada *email* dan *password*.
* **Akses:** Login berhasil jika *password* yang dimasukkan sama dengan **NIM: 24090110**.
* **Alur:** Setelah login berhasil, pengguna dialihkan ke `dashboard.html`.

### 2. Halaman Dashboard (`dashboard.html`)
Halaman ringkasan data toko "Latansa".
* **Fungsi JavaScript:** Menampilkan data *summary* (Total Produk, Total Penjualan, Total Revenue) yang diambil dari *object* di `js/script.js`.
* **Tampilan:** Menggunakan tata letak **Flexbox** atau **Grid CSS** untuk menata *card summary*.
* **Navigasi:** Terdapat tombol untuk mengarahkan pengguna ke `products.html`.

### 3. Halaman List Data Produk (`products.html`)
Halaman yang menampilkan daftar produk dalam bentuk tabel.
* **Data Produk:** Data produk yang ditampilkan adalah **Ikan Etong (Rp 45.000)**, **Ikan Kakap (Rp 50.000)**, dan **Ikan Pihi (Rp 55.000)**.
* **Fungsi JavaScript (DOM):**
    * Data tabel di-render dari *array of object* di `js/script.js` menggunakan method seperti `forEach()`.
    * Tombol **Edit** akan menampilkan pesan *alert*.
    * Tombol **Delete** akan menampilkan konfirmasi dan, jika disetujui, akan menghapus baris produk dari tabel menggunakan DOM `remove()`.