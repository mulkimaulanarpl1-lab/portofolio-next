
# Struktur Database Portofolio

Database portofolio Mulki Maulana Tegar disimpan menggunakan Supabase. Database ini digunakan untuk menyimpan data proyek, pesan dari pengunjung, dan keahlian.

## Tabel `project`

Daftar proyek portofolio Mulki Maulana Tegar.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu data dibuat |
| `slug` | `text` | Penanda unik proyek |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Deskripsi proyek |
| `kategori` | `text` | Kategori proyek |
| `minggu` | `text` | Minggu proyek dibuat |
| `fitur` | `text[]` | Daftar fitur proyek |
| `gambar_url` | `text` | Alamat gambar proyek |

RLS digunakan untuk mengatur akses data proyek.

## Tabel `messages`

Data pesan yang dikirim pengunjung melalui formulir kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu pesan dibuat |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS aktif. Pengunjung tidak diberikan izin membaca pesan.

## Tabel `skills`

Daftar keahlian Mulki Maulana Tegar.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu data dibuat |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Tingkat kemampuan |

RLS aktif. Policy `Pengunjung boleh membaca keahlian` memberikan izin kepada peran `anon` untuk membaca data keahlian.
