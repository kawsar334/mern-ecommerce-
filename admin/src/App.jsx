
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';


import {Routes, Route,} from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import ProductLis from './pages/productList/ProductLis';
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';
function App() {
  return (
    <>

  <Topbar />
 <div className='main_container'>
   <Sidebar />
<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserList />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/produclist' element={<ProductLis />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
</Routes>

 </div>
     
    </> 
  );
}

export default App;