import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import CityPage from '@/pages/CityPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-integral" element={<Home />} />
        {/* Rutas programáticas por ciudad — SEO */}
        <Route path="/:citySlug" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  )
}
