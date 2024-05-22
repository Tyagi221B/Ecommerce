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
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App