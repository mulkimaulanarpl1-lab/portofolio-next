# AGENTS.md

## Project Overview
This project is a website built with Next.js App Router and JavaScript.

## Tech Stack
- Next.js
- React
- JavaScript
- Tailwind CSS

## Coding Rules
- Preserve the existing project structure.
- Do not modify unrelated code.
- When fixing errors, make the smallest possible changes.
- Do not rename variables, components, or files unless necessary.
- Preserve the existing design and styling.
- Explain which lines need to change and why.
- Provide complete file contents when a full replacement is requested.

## Project Structure
- `src/app/`: pages, layouts, and global styles.
- `src/components/`: reusable React components.
- `public/`: images and static assets.

## Important Notes
- Use `next/image` for Next.js image components.
- Files inside `public/` are accessed from the root URL without `/public`.
- Keep only one `<body>` element in the root layout.

## Tabel `buku_tamu`

Pesan publik dari halaman Buku Tamu. Dibuat dengan SQL `create table` di SQL Editor.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama pengirim (wajib) |
| `pesan` | `text` | Isi pesan (wajib) |
| `disematkan` | `bool` | `true` jika pesan disematkan di atas, bawaan `false` |

RLS aktif. Policy `Pengunjung boleh membaca buku tamu` (`select`)
dan `Pengunjung boleh menulis buku tamu`
(`insert`) untuk peran `anon`. Mengubah dan menghapus pesan hanya
lewat halaman `/kelola` dengan secret key.