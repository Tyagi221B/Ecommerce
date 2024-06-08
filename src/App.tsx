import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/admin/Loader";
import Header from "./components/header";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const ProductManagement = lazy(
	() => import("./pages/admin/management/ProductManagement")
);
const TransactionManagement = lazy(
	() => import("./pages/admin/management/TransactionManagement")
);
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));

const BarCharts = lazy(() => import("./pages/admin/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/admin/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));
const Coupon = lazy(() => import("./pages/admin/apps/Coupon"));

const App = () => {
	return (
		<Router>
			{/* Header  */}
			<Header/>
			<Suspense fallback={<Loader />}>
				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/cart" element={<Cart />} />


					{/* ------------------Admin Routes Importing-------------------- */}
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/products" element={<Products />} />
					<Route path="/admin/customers" element={<Customers />} />
					<Route path="/admin/transaction" element={<Transaction />} />

					{/* Management */}
					<Route path="/admin/product/new" element={<NewProduct />} />
					<Route path="/admin/product/:id" element={<ProductManagement />} />
					<Route
						path="/admin/transaction/:id"
						element={<TransactionManagement />}
					/>

					{/* Charts */}
					<Route path="/admin/chart/bar" element={<BarCharts />} />
					<Route path="/admin/chart/pie" element={<PieCharts />} />
					<Route path="/admin/chart/line" element={<LineCharts />} />

					{/* Coupons */}
					<Route path="/admin/app/coupon" element={<Coupon />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
