import Navbar from '@/components/navbar'
import Calendar from '@/components/calendar'

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-background">
      <Navbar />
      <Calendar />
    </div>
  )
}

export default App
