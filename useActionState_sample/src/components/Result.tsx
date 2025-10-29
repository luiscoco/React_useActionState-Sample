export default function Result({ text }: { text: string }) {
  return (
    <p style={{ marginTop: 16 }}>
      <strong>Result:</strong> {text}
    </p>
  )
}

