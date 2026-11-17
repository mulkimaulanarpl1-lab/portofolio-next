
import FormKontak from "@/components/FormKontak";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi Mulki Maulana Tegar melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        Punya pertanyaan atau ingin menghubungi saya? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">
              Temukan saya di
            </CardTitle>
          </CardHeader>

          <CardContent>
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
                <p className="text-sm text-muted-foreground">
                  mulki.maulana.rpl1@gmail.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
