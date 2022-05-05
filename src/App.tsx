import { useState } from 'react'
interface ButtonProps {
  text?:string;
}

function Button(props: ButtonProps){
  return(
    <button>{props.text ?? 'Default'}</button>
  )
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button text="enviar"/>
    </div>
  )
}

export default App
