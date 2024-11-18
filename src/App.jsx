// import { useState } from 'react'
import Header from './components/Header/Header'
import UserCard from './components/UserCard/UserCard'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)
  const cards = [
    {
      nome: "Jonatas",
      idade: 29,
      cargo: "Dev Pleno"
    },
    {
      nome: "Larissa",
      idade: 32,
      cargo: "Dev Junior"
    }
  ]

  return (
    <>
      <Header />
      {
        cards.map( item => {
         return  <UserCard item={item} />
        })
      }
      <Footer />
    </>
  )
}

export default App
