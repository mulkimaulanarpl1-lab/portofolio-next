
"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";
import { Button } from "@/components/ui/button";

const daftarKategori = ["Semua", "IoT", "Website", "Mobile APP", "Next.js"];

export default function FilterProyek({ proyek = [] }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  const kataKecil = kata.toLowerCase();

  const hasil = proyek.filter((p) => {
    const cocokKategori =
      kategori === "Semua" || p.kategori === kategori;

    const cocokJudul = (p.judul || "")
      .toLowerCase()
      .includes(kataKecil);

    const cocokDeskripsi = (p.deskripsi || "")
      .toLowerCase()
      .includes(kataKecil);

    return cocokKategori && (cocokJudul || cocokDeskripsi);
  });

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <Button
            key={k}
            variant={kategori === k ? "default" : "outline"}
            onClick={() => setKategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      <div className="mt-6">
        <label htmlFor="cari" className="block font-semibold">
          Cari proyek
        </label>

        <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: REVORA"
          className="mt-2 w-full rounded-lg border border-input bg-card p-2 md:w-80"
        />

        {kata !== "" && (
          <button
            type="button"
            onClick={() => setKata("")}
            className="ml-4 text-sm font-semibold text-aksen hover:underline"
          >
            Hapus Pencarian
          </button>
        )}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Menampilkan {hasil.length} dari {proyek.length} proyek
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {hasil.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}

        {hasil.length === 0 && (
          <p className="mt-6 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
            Belum ada proyek yang cocok.
          </p>
        )}
      </div>
    </div>
  );
}
