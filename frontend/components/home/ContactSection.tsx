'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { contactSchema, type ContactFormData } from '@/schemas/contactSchema'
import { submitContactForm } from '@/app/actions/contact'

export function ContactSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await submitContactForm(data)
      if (result.success) {
        toast.success(result.message)
        form.reset()
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <span className="text-stone-500 uppercase tracking-widest text-sm">
                Contato
              </span>
              <h2 className="text-4xl md:text-5xl mt-2 font-light text-stone-900">
                Vamos conversar?
              </h2>
            </div>
            <p className="text-stone-600 font-light text-lg">
              Estamos prontos para transformar sua visão em realidade. Agende uma
              reunião ou visite nosso escritório.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 text-stone-800">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-stone-500">
                    Endereço
                  </p>
                  <p className="text-lg">
                    Avenida Augusto Prolik 221 Sala 108<br />
                    Palmas<br />
                    Governador Celso Ramos SC<br />
                    88190-000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-stone-800">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-stone-500">
                    Email
                  </p>
                  <p className="text-lg">fasa.arquitetos@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-stone-800">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-wider text-stone-500">
                    Telefone
                  </p>
                  <a
                    href="https://wa.me/5548998304426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-stone-600 transition-colors group"
                  >
                    <span>(48) 99830-4426</span>
                    <MessageCircle
                      size={18}
                      className="text-green-600 group-hover:text-green-700 transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-stone-50 p-8 md:p-12 space-y-6 shadow-sm"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-stone-500">
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome completo"
                        className="bg-transparent border-b border-stone-300 rounded-none border-x-0 border-t-0 py-3 focus:border-stone-800 focus:outline-none transition-colors font-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-stone-500">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-transparent border-b border-stone-300 rounded-none border-x-0 border-t-0 py-3 focus:border-stone-800 focus:outline-none transition-colors font-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-stone-500">
                      Mensagem
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Conte sobre seu projeto"
                        className="bg-transparent border-b border-stone-300 rounded-none border-x-0 border-t-0 py-3 focus:border-stone-800 focus:outline-none transition-colors font-light resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-stone-900 text-white py-4 uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors mt-4"
              >
                {form.formState.isSubmitting
                  ? 'Enviando...'
                  : 'Enviar Mensagem'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
