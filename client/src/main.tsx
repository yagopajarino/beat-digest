import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Home from './Home.tsx'
import Player from './Player.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path=":pid" element={<Player />} />
    </Route>
  </Routes>
  </BrowserRouter>
)
