import './App.css'
import { Banner } from "./components/Banner/Banner"

import { Header } from "./components/Header/Header"
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { UsersPage } from './pages/UsersPage/UsersPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<ProductPage />}/>
        <Route path='/users' element={<UsersPage/>}/>
      </Routes>
    </>
  )
}

export default App