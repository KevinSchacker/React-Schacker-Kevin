import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import SearchResults from './components/SearchResults/SearchResults'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import './App.css'

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/search/:searchTerm" element={<SearchResults />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}