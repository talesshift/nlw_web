import { useState } from 'react'
interface ButtonProps {
  text?:string;
}

function Button(props: ButtonProps){
  return(
    <button className='bg-violet-500 px-4 h-10 rounded text-white hover:bg-violet-400 transition-colors'>{props.text ?? 'Default'}</button>
  )
}

function App() {
  return (
    <div className='flex gap-2'>
      <Button text="alou"/>
      <Button text="enviar"/>
      <Button text="uevo"/>
    </div>
  )
}

export default App
