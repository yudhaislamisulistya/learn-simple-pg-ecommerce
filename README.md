Berikut adalah contoh dokumentasi untuk program Next.js Anda yang dapat diunggah di README.md:

# Program Next.js - Payment Gateway Integration (MIDTRANS)

Program ini adalah aplikasi web menggunakan framework Next.js yang mengintegrasikan sistem pembayaran dengan payment gateway MIDTRANS. Aplikasi ini memiliki beberapa fitur utama seperti pembuatan transaksi melalui API, dan halaman-halaman terkait pembayaran.

## Daftar Isi

- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [API - Pembuatan Transaksi](#api-pembuatan-transaksi)
- [Halaman Pembayaran](#halaman-pembayaran)
  - [Halaman Pay](#halaman-pay)
  - [Halaman Error](#halaman-error)
  - [Halaman Pending](#halaman-pending)
  - [Halaman Success](#halaman-success)

## Instalasi

1. Clone repositori ini ke dalam direktori lokal:

```shell
git clone https://github.com/yudhaislamisulistya/learn-simple-pg-ecommerce.git
```

2. Masuk ke direktori proyek:

```shell
cd learn-simple-pg-ecommerce
```

3. Install dependensi proyek:

```shell
npm install
```

## Menjalankan Aplikasi

1. Jalankan server pengembangan Next.js:

```shell
npm run dev
```


2. Buka browser dan akses aplikasi melalui URL berikut:

```
http://localhost:3000
```

## API - Pembuatan Transaksi

Endpoint `api/transaction/create` digunakan untuk membuat transaksi melalui payment gateway. Anda dapat mengirimkan permintaan POST ke endpoint ini dengan data transaksi yang diperlukan. Contoh implementasi penggunaan endpoint ini dapat ditemukan pada file `api/transaction/create.js`.

## Halaman Pembayaran

### Halaman Pay

Halaman `page/pay/` digunakan untuk menampilkan pembayaran. Anda dapat mengakses halaman ini melalui URL berikut:

```
http://localhost:3000/pay/
```

### Halaman Error

Halaman `page/pay/error` digunakan untuk menampilkan pesan kesalahan jika terjadi masalah selama proses pembayaran. Anda dapat mengakses halaman ini melalui URL berikut:

```
http://localhost:3000/pay/error
```

### Halaman Pending

Halaman `page/pay/pending` digunakan untuk menampilkan status pesanan yang sedang dalam proses pembayaran. Anda dapat mengakses halaman ini melalui URL berikut:

```
http://localhost:3000/pay/pending
```

### Halaman Success

Halaman `page/pay/success` digunakan untuk menampilkan pesan keberhasilan setelah pembayaran berhasil. Anda dapat mengakses halaman ini melalui URL berikut:

```
http://localhost:3000/pay/success
```

---
