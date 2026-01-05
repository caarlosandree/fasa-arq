import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl font-light text-stone-900">404</h1>
        <p className="text-xl text-stone-600 font-light">
          Projeto não encontrado
        </p>
        <p className="text-stone-500 max-w-md mx-auto">
          O projeto que você está procurando não existe ou foi removido.
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/#portfolio">Voltar ao portfólio</Link>
        </Button>
      </div>
    </div>
  )
}
