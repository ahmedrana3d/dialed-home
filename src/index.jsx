import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route path="/*" element={ <App /> } />
      </Routes>
    </Router>
  </>
)

