import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import Footer from "@/components/Footer";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster Dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <>
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <Hero
       nama="Mulki Mualana Tegar"
       tagline="Seorang pelajar yang tertarik dalam dunia teknologi, khususnya Web Development, Front-End Development, dan Database."
      />

        <Kartu judul="Tentang Saya">
          <p className="lending-7 text-gray-700">
            Saya adalah seseorang yang masih terus mencari dan membentuk diri saya sendiri. Saya suka mencoba hal-hal baru, memiliki rasa penasaran yang cukup besar, dan tidak mudah puas hanya dengan mengetahui sesuatu di permukaannya.
            Saya mungkin masih banyak kekurangan, tetapi saya selalu berusaha untuk belajar dari setiap pengalaman dan kesalahan.
            Bagi saya, proses untuk menjadi lebih baik jauh lebih penting daripada terlihat sudah sempurna.
            motto hidup saya adalah Jangan mencari ketengan di tempat nabi adam di hukum
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
          <p  className="lending-7 text-gray-700">
            Saya, Bercita-cita ketika saya sudah lulus dari SMKN 1 Pasuruan, 
            saya ingin masuk lpk untuk belajar bahasa Jepang, setelah lancar,
            saya ingin pergi ke negara Jepang dan bekerja di Negar sana dan menabung gaji saya,
            ketika uang nya suda terkumpul saya ingin membuat peternakan sapi dan menjadi blantek sapi 
          </p>
        </Kartu>
     </div>

     <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
         <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama}
          level={skill.level} />
          ))}
         </div>
      </section>

    <div className="mt-10">
     <Kartu judul="Jawal Belajar">
      <div className="ovroverflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-blue-900 text-white">
              <td className="px-3 py-2">Hari</td>
              <td className="px-3 py-2">Waktu</td>
              <td className="px-3 py-2">Kegiatan</td>
            </tr>
          </thead>

          <tbody>
            <tr className="broder-b border-gray-200">
              <td className="px-3 py-2">Senin</td>
              <td className="px-3 py-2">19.00 - 20.00</td>
              <td className="px-3 py-2">Membaca ulang modul</td>
            </tr>

            <tr className="broder-b border-gray-200">
              <td className="px-3 py-2">Rabu</td>
              <td className="px-3 py-2">19.00 - 21.00</td>
              <td className="px-3 py-2">Mengerjakan tugas praktik </td>
            </tr>

            <tr className="broder-b border-gray-200">
              <td className="px-3 py-2">Jum'at</td>
              <td className="px-3 py-2">19.30 - 20.30</td>
              <td className="px-3 py-2">Membuat video dan menulis laporan</td>
            </tr>
          </tbody>
        </table>
      </div>

     </Kartu>

     </div>

    </main>

    <Footer />
    </>
  );
}