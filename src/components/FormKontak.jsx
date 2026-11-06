
"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }
        if (!email.includes("@")) {
            errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com";
        }
        setError(errorBaru);
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-4">
            <div>
                <label htmlFor="nama" className="block font-semibold">
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Mulki Maulana Tegar"
                    className={kelasInput}
                />
                {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className={kelasInput}
                />
                {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
            </div>

            <div>
                <label htmlFor="telepon" className="block font-semibold">
                    Nomor HP
                </label>
                <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    placeholder="1511980"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
                />
            </div>

            <div>
                <label htmlFor="keperluan" className="block font-semibold">
                    Keperluan
                </label>
                <select
                    id="keperluan"
                    name="keperluan"
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
                    defaultValue=""
                >
                    <option value="" disabled>
                        ---pilih keperluan---
                    </option>
                    <option value="Pertanyaan">Pertanyaan</option>
                    <option value="kerja-sama">Kerja sama</option>
                    <option value="lainnya">Lainnya</option>
                </select>
            </div>

            <div>
                <label htmlFor="pesan" className="block font-semibold">
                    Pesan
                </label>
                <textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    maxLength={350}
                    placeholder="Tulis pesanmu di sini..."
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
                />
            </div>

            <button
                type="submit"
                className="rounded-lg bg-red-700 px-5 py-2 font-semibold text-white transition hover:opacity-90"
            >
                Kirim Pesan
            </button>
        </form>
    );
}
