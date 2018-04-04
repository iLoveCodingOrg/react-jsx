import React from 'react'
import ReactDOM from 'react-dom'
import Simple from '../components/Simple'

function App() {
  return (
    <Simple buttonText="Click it" />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)