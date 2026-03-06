import { Content } from "./Content/Content.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EachUser } from "./EachUser.jsx"


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/user/:id" element={<EachUser />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
