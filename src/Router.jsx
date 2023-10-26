import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeView from './views/HomeView'
import DetailView from './views/DetailView'
import AdminView from './views/AdminView'
import LoginView from './views/LoginView'
import Navbar from './Components/Commons/Navbar.jsx'
import Footer from './Components/Commons/Footer.jsx'
import ErrorView from './views/ErrorView'
import RegisterView from './views/RegisterView'
import { useSession } from './stores/useSession'

const Router = () => {

  const{user, isLoggedIn} = useSession();

  return (
    <BrowserRouter>
      <Navbar/>
      <main className='container-fluid'>
        <Routes>
            <Route path='/' element={<HomeView/>}/>
            <Route path='/detalle' element={<DetailView/>}/>
            <Route path='/login' element={isLoggedIn ? <Navigate to='/'/> : <LoginView/>}/>
            <Route path='/admin' element={user?.isAdmin ? <AdminView/> : <Navigate to='/'/>}/>
            <Route path='/register' element={isLoggedIn ? <Navigate to='/'/> : <RegisterView/>}/>
            <Route path='*' element={<ErrorView/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
