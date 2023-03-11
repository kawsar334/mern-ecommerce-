
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';


import {Routes, Route, Navigate,} from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import ProductLis from './pages/productList/ProductLis';
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';
import React ,{Component} from "react";
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';

function App() {

  const { currrentUser } = useSelector((state) => state.auth);
console.log(currrentUser)
  //protected route 
  const ProtectedRoute= ({children})=>{
    const admin = currrentUser?.others.isAdmin
  if (!admin){
    return <Navigate to="/login"/>;
  }
    return children 
}



  return (
    <>
      {currrentUser?.others.isAdmin && <Topbar />}
 <div className='main_container'>
        {currrentUser?.others.isAdmin && <Sidebar />}
<Routes>
          <Route path='/' element={
          <ProtectedRoute>
          <UserList />
            </ProtectedRoute>
          } />
          <Route path='/user' element={
          <ProtectedRoute>
          <UserList />
          </ProtectedRoute>
        }
           />
          <Route path='/user/:id' element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
          } />
          <Route path='/newuser' element={
            <NewUser />} />
          <Route path='/produclist' element={<ProtectedRoute><ProductLis /></ProtectedRoute>} />
          <Route path='/product/:id' element={<ProtectedRoute> <Product /></ProtectedRoute> } />
          <Route path='/newproduct' element={<ProtectedRoute><NewProduct /></ProtectedRoute>} />
          <Route path='/login' element={!currrentUser?.others?.isAdmin ?<Login /> :<UserList />} />

</Routes>
 </div>
     
    </> 
  );
}

export default App;