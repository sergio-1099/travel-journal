import './App.css'
import Nav from './components/Nav.jsx';
import Entry from './components/Entry.jsx';

function App() {
  return (
    <>
      <Nav />
      <div className="entries">
        <Entry />
      </div>
    </>
  )
}

export default App
