
import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponenet from './Component/FooterComponenet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        // http://localhost:3000
        <Route path ='/' element ={<ListEmployeeComponent/>}></Route>
       <FooterComponenet/>
      </Routes>
      <ListEmployeeComponent/>
      
      </BrowserRouter> 
    </>
  )
}

export default App
