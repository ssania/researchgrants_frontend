// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Userpage from './Components/Userpage'
import Header from './Components/Header';
import Aboutus from './Components/Aboutus'
import FAQ from './Components/FAQ';
import Grants from './Components/Grants'
import Contactus from './Components/Contactus'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Footer from './Components/Footer';
import Queries from './Components/Admin/Queries';
import Adminpage from './Components/Admin/Adminpage';
import Grantsadmin from './Components/Admin/Grantsadmin';
import {BrowserRouter} from 'react-router-dom';
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Userpage/>}></Route>
            <Route path='Userpage'element={<Userpage/>}></Route>
            <Route path='Header'element={<Header/>}></Route>
            <Route path='Footer'element={<Footer/>}></Route>
            <Route path='Aboutus'element={<Aboutus/>}></Route>
            <Route path='FAQ'element={<FAQ/>}></Route>
            <Route path='Grants'element={<Grants/>}></Route>
            <Route path='Contactus'element={<Contactus/>}></Route>
            <Route path='Login'element={<Login/>}></Route>
            <Route path='Adminpage'element={<Adminpage/>}></Route>
            <Route path='Signup'element={<Signup/>}></Route>
            <Route path='Queries'element={<Queries/>}></Route>
            <Route path='Grantsadmin'element={<Grantsadmin/>}></Route>
             </Routes>
             </BrowserRouter>
    );
}
export default App;
// import React from 'react'
// import Fetchdata from './Components/Fetchdata'

// export default function App() {
//   return (
//     <div>
//       <Fetchdata/>
//     </div>
//   )
// }
