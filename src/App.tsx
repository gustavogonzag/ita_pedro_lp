import './App.css'
import Header from './LandingPage/Header'
import Oevento from './LandingPage/Oevento'

function App() {

  return (
    <>
      <div className='min-h-screen w-full bg-bg-vinho'>
        <div className='bg-background-itapedro'>
          <Header />
          <Oevento />
        </div>
      </div>
    </>
  )
}

export default App
