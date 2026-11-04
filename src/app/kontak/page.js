export const metadata = {
    title: "Kontak",
    description: "Hubumgi Mulki Maulana Tegar melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4s py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 tetx-lg tetx-gray-700 "> Punya Pertanyaan atau ingin menghubungi saya? isi form berikut.</p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
                    <form className="space-y-4">
                        <div>
                           <label htmlFor="nama" className="block font-semibold">
                            Nama lengkap
                           </label>
                           <input
                           type="text"
                           id="nama"
                           name="nama"
                           placeholder="Contoh: Budi Santoso"
                           required
                           className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"></input>
                        </div>

                        <div>
                           <label htmlFor="email" className="block font-semibold">
                            Email
                           </label>
                           <input
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Contoh: Mulkk80@gmail.com"
                           required
                           className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"></input>
                        </div>

                        <div>
                           <label htmlFor="nama" className="block font-semibold">
                            Nomor hp
                           </label>
                           <input
                           type="tel"
                           id="telepon"
                           name="telepon"
                           placeholder="1511980"
                           required
                           className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"></input>
                        </div>

                        <div>
                            <label htmlFor="keperluan" className="block font-semibold">
                                Keperluan
                            </label>
                            <select
                            id="keperluan"
                            name="keperluan"
                            className="mt-1 w-full rounded-lg border border-gray-300 ng-white p-2"
                            defaultValue=""
                            >
                                <option velue="" sisabled>
                                    ---pilih keperluan---
                                </option>
                                <option velue="Pertanyaan">Pertanyaan</option>
                                <option velue="kerja-sama">Kerja sama</option>
                                <option velue="lainnya">lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label htmlfor="pesan" className="block font-semibold">
                                Pesan 
                            </label>
                            <textarea 
                            id="pesan"
                            name="pesan"
                            rows={5}
                            maxLength={350}
                            placeholder="Tulis pesanmu disini..."
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>

                        <button
                        type="button"
                        className="rounded-lg bg-red-700 px-5 py-2 font-semibold text-white transition hover:opacity-90"
                        >
                            Kirim Pesan
                        </button>

                        <p className="tetx-sm text-gray-500">
                            Form ini belum dapat mengirim pesan. Fitur pengiriman pesan akan dibuat pada Minggu 05
                        </p>
                    </form>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-bold text-utama">
                        Temukan saya di 
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">GitHub</p>
                            <a 
                            href="https://github.com/mulkimaulanarpl1-lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-700 hover:underline"
                            >
                             github.com/mulkimaulanarpl1-lab
                            </a>
                        </div>

                        <div>
                            <p className="font-semibold">Email</p>
                            <p className="tetx-sm text-gray-500">
                                mulki.maulana.rpl1@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}