import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
    // { title, data, dataKey, grid }
  return (
    <div className="home">
        <FeaturedInfo />
          <Chart title="User Analytices" data={userData} dataKey="activeUser" grid/>

          <div className="homeWidget">
              <WidgetSm />
              <WidgetLg />
          </div>
    </div>
  )
}

export default Home