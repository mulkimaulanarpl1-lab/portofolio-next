
import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Mulki Maulana Tegar melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Punya pertanyaan atau ingin menghubungi saya? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
                    <FormKontak />
                </section>

                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-bold text-utama dark:text-sky-200">
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
                            <p className="text-sm text-gray-500">
                                mulki.maulana.rpl1@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
