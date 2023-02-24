import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Example from './components/exampleComponent/Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Hello World!
      <Example />
    </div>
  )
}

export default App
