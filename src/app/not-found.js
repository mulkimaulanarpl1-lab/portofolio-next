import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto my-auto max-w-5xl text-center">
            <h1 className="text-aksen font-bold text-7xl ">404</h1>
            <h2 className="mt-3 text-4xl font-semibold text-utama">Halaman ini tidak ditemukan</h2>
            <p className="text-utama mt-4 mb-7">Halaman yang kamu buka tidak ditemukan atau sudah dipindahkan</p>
            <Link href="/" className="bg-utama p-2 rounded-md text-white font-semibold">
                Halaman ke beranda
            </Link>
        </main>
    )
}