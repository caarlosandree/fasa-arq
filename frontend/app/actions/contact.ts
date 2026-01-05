'use server'

import { contactSchema, type ContactFormData } from '@/schemas/contactSchema'

export async function submitContactForm(data: ContactFormData) {
  // Validação no servidor
  const validatedData = contactSchema.parse(data)

  // Aqui você pode integrar com seu serviço de email, API, etc.
  // Por enquanto, apenas simulamos o envio
  console.log('Formulário recebido:', validatedData)

  // Simular delay de API
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Retornar resultado
  return {
    success: true,
    message: 'Mensagem enviada com sucesso!',
  }
}
