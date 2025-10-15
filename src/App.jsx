import { useState } from "react"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from './components/MailboxForm.jsx';
import MailboxDetails from "./components/MailboxDetails";
import "./index.css";

function App() {
  const [mailboxes, setMailboxes] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  function addBox(newBox){
    const id = mailboxes.length + 1
    setMailboxes([...mailboxes,{id,...newBox}])

  }

  return (
  <Router>
    <div className={darkMode ? 'app dark' : 'app'}>
      <NavBar darkMode ={darkMode} setDarkMode = {setDarkMode} />

      <Routes>
        <Route path="/" element ={<MailboxList mailboxes={mailboxes} />} />
<Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new" element={<MailboxForm addBox={addBox} />} />
          <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>


    </div>
  </Router>
  )
}

export default App