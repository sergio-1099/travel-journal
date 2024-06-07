import './App.css'
import Nav from './components/Nav.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  let locationData = data.map(location => {
    return (
      <Entry
        key={location.title}
        {...location}
      />
    )
  })

  return (
    <>
      <Nav />
      <div className="entries">
        {locationData}
      </div>
    </>
  )
}

export default App
