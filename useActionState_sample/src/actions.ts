export async function saveMessage(formData: FormData): Promise<string> {
  await new Promise((r) => setTimeout(r, 600))
  const message = (formData.get('message') || '').toString().trim()
  return message ? `Saved: ${message}` : 'Please enter a message'
}

