import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="font-serif text-4xl tracking-tight">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-muted">Alamat tersebut tidak tersedia di situs ini.</p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center text-sm underline underline-offset-4">
        Kembali ke beranda
      </Link>
    </main>
  );
}
