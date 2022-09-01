import Products from './pages/Products'
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/product-list">Product List</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/product/1">Product Detail</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace='true' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
