import './App.css'
import Navbar from '../components/NavBar'
import JourneyCard from '../components/JourneyCard'
import data from './data.js'

function App() {
  const cards = data.map(card => {
      return <JourneyCard 
        img= {card.imageUrl}
        location = {card.location}
        googleMapsUrl = {card.googleMapsUrl}
        title = {card.title}
        startDate = {card.startDate}
        endDate = {card.endDate}
        description = {card.description}
      />
  })
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

export default App
