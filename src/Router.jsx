import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import DetailView from './views/DetailView'
import AdminView from './views/AdminView'
import LoginView from './views/LoginView'
import Navbar from './Components/Commons/Navbar.jsx'
import Footer from './Components/Commons/Footer.jsx'
import ErrorView from './views/ErrorView'

const Router = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <main className='container-fluid'>
        <Routes>
            <Route path='/' element={<HomeView/>}/>
            <Route path='/detalle' element={<DetailView/>}/>
            <Route path='/login' element={<LoginView/>}/>
            <Route path='/admin' element={<AdminView/>}/>
            <Route path='*' element={<ErrorView/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
