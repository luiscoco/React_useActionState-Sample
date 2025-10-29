export type FormAction = (formData: FormData) => void | Promise<void>

type SaveFormProps = {
  action: FormAction
  isPending: boolean
}

export default function SaveForm({ action, isPending }: SaveFormProps) {
  return (
    <form action={action} style={{ display: 'flex', gap: 8 }}>
      <input
        name="message"
        placeholder="Type a message"
        style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
      />
      <button type="submit" disabled={isPending} style={{ padding: '8px 14px' }}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}

