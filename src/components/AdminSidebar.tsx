import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import { FaChartBar, FaChartPie, FaChartLine  } from "react-icons/fa";

const AdminSidebar = () => {
	const location = useLocation();

	return (
		<aside>
			<h2>Logo.</h2>
			<SubSectionOne location={location} />
      <SubSectionTwo location={location} />
      <SubSectionThree location={location} />
		</aside>
	);
};

const SubSectionOne = ({ location }: { location: Location }) => (
	<div>
		<h5>Dashboard</h5>
		<ul>
			<Li
				url="/admin/dashboard"
				Icon={RiDashboardFill}
				location={location}
				text="Dashboard"
			/>
			<Li
				url="/admin/products"
				Icon={RiShoppingBag3Fill}
				location={location}
				text="Product"
			/>
			<Li
				url="/admin/customers"
				Icon={IoIosPeople}
				location={location}
				text="Customers"
			/>
			<Li
				url="/admin/transaction"
				Icon={AiFillFileText}
				location={location}
				text="Transaction"
			/>
		</ul>
	</div>
);

const SubSectionTwo = ({ location }: { location: Location }) => (
  <div>
				<h5>Charts</h5>
				<ul>
					<Li
						url="/admin/chart/bar"
						Icon={FaChartBar}
						location={location}
						text="Bar"
					/>
					<Li
						url="/admin/chart/pie"
						Icon={FaChartPie}
						location={location}
						text="Pie"
					/>
					<Li
						url="/admin/chart/line"
						Icon={FaChartLine}
						location={location}
						text="Line"
					/>
				</ul>
			</div>
);

const SubSectionThree = ({ location }: { location: Location }) => (
  <div>
				<h5>App</h5>
				<ul>
					<Li
						url="/admin/app/coupon"
						Icon={RiCoupon3Fill}
						location={location}
						text="Coupon"
					/>
				</ul>
			</div>
);
interface LiProps {
	url: string;
	text: string;
	location: Location;
	Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
	<li
		style={{
			backgroundColor: location.pathname.includes(url)
				? "rgba(0,115,255,0.1)"
				: "white",
		}}
	>
		<Link
			to={url}
			style={{
				color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
			}}
		>
			<Icon />
			{text}
		</Link>
	</li>
);

export default AdminSidebar;
