export default function Footer() {
    const tahun = new Date().getFullYear();

    return (
        <footer className="mt-10 border-t border-blue-900 bg-blue-950 px-4 py-6 flex justify-center">
            <div className="mt-auto max-w-5xl text-center flex justify-center">
                <p className="text-base text-white text-center flex justify-center">
                    © {tahun} Mulki Maulana Tegar. Dibuat dengan Next.js kelas industri UBIG.
                </p>
            </div>
        </footer>
    );
}