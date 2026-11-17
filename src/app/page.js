
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster Dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
  const { data: proyekTerbaru, error } = await supabase
    .from("project")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <Hero
        nama="Mulki Mualana Tegar"
        tagline="Seorang pelajar yang tertarik dalam dunia teknologi, khususnya Web Development, Front-End Development, dan Database."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Keahlian
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Proyek Terbaru
        </h2>

        {error && (
          <p className="text-aksen">
            Gagal memuat proyek: {error.message}
          </p>
        )}

        {!error && proyekTerbaru?.length === 0 && (
          <p className="text-muted-foreground">
            Belum ada proyek terbaru.
          </p>
        )}

        {!error && proyekTerbaru && proyekTerbaru.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
        )}

        <Link
          href="/proyek"
          className={buttonVariants({
            size: "lg",
            className: "mt-6",
          })}
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
