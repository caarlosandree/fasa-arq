import { Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-[0.2em] uppercase text-stone-300">
          Fasa<span className="font-light">.Arq</span>
        </div>
        <div className="flex gap-6">
          <a
            href="https://instagram.com/fasa.arquitetos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        <div className="text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Fasa Arquitetura.
        </div>
      </div>
    </footer>
  )
}
