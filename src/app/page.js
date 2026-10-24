import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster Dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
       nama="Mulki Mualana Tegar"
       tagline="Seorang pelajar yang tertarik dalam dunia teknologi, khususnya Web Development, Front-End Development, dan Database."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
         <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama}
          level={skill.level} />
          ))}
         </div>
      </section>
    </main>
  );
}