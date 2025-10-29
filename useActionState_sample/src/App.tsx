import { useActionState } from 'react'
import { saveMessage } from './actions'
import SaveForm from './components/SaveForm'
import Result from './components/Result'

function App() {
  const [status, formAction, isPending] = useActionState(
    async (_prev: string, formData: FormData) => saveMessage(formData),
    'Initial message',
  )

  return (
    <div style={{ maxWidth: 420, margin: '3rem auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: 12 }}>useActionState demo</h1>
      <SaveForm action={formAction} isPending={isPending} />
      <Result text={status} />
    </div>
  )
}

export default App

