import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {lazy, Suspense} from "react"
import Loader from "./components/Loader"

const Home = lazy(()=> import("./pages/Home"))
const Search = lazy(()=> import("./pages/Search"))
const Cart = lazy(()=> import("./pages/Cart"))
const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Products = lazy(()=> import("./pages/Products"))
const Customers = lazy(()=> import("./pages/Customers"))
const Transaction = lazy(()=> import("./pages/Transaction"))
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(()=> import("./pages/management/TransactionManagement"));
const NewProduct = lazy(()=> import("./pages/management/NewProduct"));



const App = () => {
  return (
    <Router>
      {/* Header  */}
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/admin/customers" element={<Customers/>}/>
        <Route path="/admin/transaction" element={<Transaction/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
         {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ProductManagement />} />
        <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
        />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App