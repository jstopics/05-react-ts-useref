import {useEffect, useRef} from 'react'

export default function UseRefSpan() {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.innerText = "Hello World!"
    }
  }, [])

  return (
    <div>
      <span ref={spanRef}>Hi</span>
    </div>
  )
}