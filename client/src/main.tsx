import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import './index.css'
import Home from './Home.tsx'
import Player from './Player.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":pid" element={<Player />} />
      </Route>
    </Routes>
  </HashRouter>
)
