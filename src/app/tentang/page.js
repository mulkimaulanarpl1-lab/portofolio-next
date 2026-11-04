
import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, Hobi, cita-cita, dan jadwal belajar Mulki Maulan Tegar",
};

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-utama md:text-4xl">
        Tentang Saya
      </h1>

      <div className="space-y-6">
        <Kartu judul="Perkenalan">
          <p className="leading-7 text-gray-700">
            Saya adalah seseorang yang masih terus mencari dan membentuk diri
            saya sendiri. Saya suka mencoba hal-hal baru, memiliki rasa
            penasaran yang cukup besar, dan tidak mudah puas hanya dengan
            mengetahui sesuatu di permukaannya. Saya mungkin masih banyak
            kekurangan, tetapi saya selalu berusaha untuk belajar dari setiap
            pengalaman dan kesalahan. Bagi saya, proses untuk menjadi lebih
            baik jauh lebih penting daripada terlihat sudah sempurna. Motto
            hidup saya adalah Jangan mencari ketengan di tempat nabi adam di
            hukum.
          </p>
        </Kartu>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Belajar pemrograman</li>
              <li>Membuat dan mengembangkan website</li>
              <li>Mempelajari database</li>
              <li>Mendesain poster mengembangkan Canva</li>
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="leading-7 text-gray-700">
              Saya, bercita-cita ketika saya sudah lulus dari SMKN 1 Pasuruan,
              saya ingin masuk LPK untuk belajar bahasa Jepang, setelah lancar,
              saya ingin pergi ke negara Jepang dan bekerja di negara sana dan
              menabung gaji saya. Ketika uangnya sudah terkumpul, saya ingin
              membuat peternakan sapi dan menjadi blantek sapi.
            </p>
          </Kartu>
        </div>
      </div>
    </main>
  );
}
