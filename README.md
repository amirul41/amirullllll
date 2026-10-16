# Creative Personal Portfolio

Portfolio satu halaman: HTML5 + CSS3 + JavaScript vanilla. Tanpa framework, tanpa instalasi.

## Struktur folder

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    └── profile.jpg      <- fotomu (ganti file ini untuk mengganti foto)
```

Jaga agar semua file tetap di folder yang sama seperti di atas.

## Cara menjalankan

1. Ekstrak folder `portfolio` (jika dalam bentuk ZIP).
2. Klik dua kali `index.html` — website terbuka di browser.
3. Untuk mengedit: klik kanan file -> Open with -> Notepad (atau VS Code), ubah, simpan, lalu refresh browser (F5).

Catatan: font Nunito & Poppins dimuat dari Google Fonts, jadi butuh internet. Tanpa internet, tampilan memakai font cadangan.

## Cara mengganti konten

| Yang diganti | File | Cari |
|---|---|---|
| Nama panggilan (logo, footer) | `index.html` | `Amirul` |
| Nama lengkap | `index.html` | `[NAMA LENGKAP SAYA]` |
| Foto | `images/profile.jpg` | Ganti file dengan foto baru, nama tetap `profile.jpg` (rasio 3:4 paling pas) |
| Tagline & deskripsi | `index.html` | `hero-tagline`, `hero-desc` |
| Hobi | `index.html` | Bagian `MY HOBBIES`, salin/hapus blok `<article class="card hobby">` |
| Keahlian | `index.html` | Bagian `MY SKILLS`; angka `data-level="70"` = level (0-100), hapus `<div class="meter">` jika tak ingin bar |
| Pendidikan & pengalaman | `index.html` | Bagian `MY JOURNEY`, isi `[TAHUN]`, `[NAMA KEGIATAN / ORGANISASI]` |
| Email | `index.html` | `EMAIL_SAYA@example.com` (2 tempat) |
| Instagram | `index.html` | `USERNAME_INSTAGRAM` (2 tempat) |
| GitHub | `index.html` | `USERNAME_GITHUB` (2 tempat) |
| Warna | `style.css` | Blok `:root` paling atas (`--bg`, `--ink`, `--accent`) |

### Mengganti karya (Portfolio)

Tiga kartu proyek adalah **contoh/placeholder** (ada label "Contoh"). Untuk karya asli:

1. Simpan gambar karya di folder `images/`, mis. `images/poster-1.jpg`.
2. Di `index.html`, pada kartu proyek, ganti `<div class="thumb thumb-poster">...</div>` dengan:
   `<img src="images/poster-1.jpg" alt="Deskripsi karya" />`
3. Hapus `<span class="sample-badge">Contoh</span>`, lalu ubah judul, kategori, dan deskripsi.

## Cara upload ke GitHub

**Lewat website (paling mudah)**
1. Buat akun di github.com, klik **New repository**, beri nama mis. `portfolio`, pilih **Public**, klik **Create**.
2. Klik **uploading an existing file**, tarik seluruh isi folder `portfolio` (termasuk folder `images`), lalu **Commit changes**.
3. Buka **Settings -> Pages**, pada **Branch** pilih `main` dan folder `/ (root)`, klik **Save**.
4. Tunggu 1-2 menit; websitemu aktif di `https://USERNAME_GITHUB.github.io/portfolio/`.

**Lewat Git (terminal)**
```bash
cd portfolio
git init
git add .
git commit -m "Add creative portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME_GITHUB/portfolio.git
git push -u origin main
```
Lalu aktifkan **Settings -> Pages** seperti langkah 3 di atas.
