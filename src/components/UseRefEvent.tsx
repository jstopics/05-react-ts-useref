import {useRef} from 'react'

export default function UseRefElement() {
  const elementRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (elementRef.current) {
      elementRef.current.onclick = () => console.log('doing something')
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Bind button</button>
      <button ref={elementRef}>Ref Button</button>
    </div>
  )
}