import AdminSidebar from "../../components/admin/AdminSidebar"
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../../assets/userpic.png";
import { WidgetItem } from "../../components/admin/WidgetContainer";
import { BarChart, DoughnutChart } from "../../components/admin/Chart";
import { CategoryItem } from "../../components/admin/CategoryItem";
import data from "../../assets/data.json";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../../components/admin/DashboardTable";



const Dashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar  */}
      <AdminSidebar/>
      
      {/* Main  */}
      <main className="dashboard">
      <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>


        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Grapph here */}
            <BarChart
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>


        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>

            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />

            <p>
              <BiMaleFemale />
            </p>
          </div>

          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  )
}

export default Dashboard