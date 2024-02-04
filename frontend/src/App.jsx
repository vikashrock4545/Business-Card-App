import { useEffect, useState } from "react"
import SocialButtons from "./Socialbuttons"
// import { Button } from "./Button"
import './index.css'

function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/card")
      .then(async (response) => {
        const json = await response.json()
        setCards(json.response)
      })
    }, 2000)
  }, [])
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <Card key = {card._id} style={{ flexBasis: "50%", boxSizing: "border-box"}}>
          <h1>{card.name}</h1>
          <p>{card.description}</p>
          <b style={{fontSize: 20}}>Interests</b>
          {card.interests.map((res, index) => (
            <p key={index}>{res}</p>
          ))}
          <SocialButtons
            linkedinLink = {card.linkedin}
            twitterLink = {card.twitter}
          />
        </Card>
      ))}
      {/* TODO - make this button center */}
      {/* Implement this button */}
      {/* <Button heading="Add-Card" link="Auth-Page"></Button> */}
    </div>
  )
}

function Card({children}) {
  return <div 
    style={{
        border: '1px solid black',
        borderRadius: '8px',
        margin: '10px',
        padding: '10px',
        flexBasis: 'calc(50% - 20px)',
        boxSizing: 'border-box',
        backgroundColor: '#f0f8ff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
  >
    {children}
  </div>
}

export default App
