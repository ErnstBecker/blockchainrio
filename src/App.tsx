import "./index.css"
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom"

// Pages
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
