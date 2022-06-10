import {useEffect, useRef} from 'react'

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  return (
    <div>
      <input type="text"/>
      <input type="text"/>
      <input ref={inputRef} type="text"/>
      <input type="text"/>
    </div>
  );
}