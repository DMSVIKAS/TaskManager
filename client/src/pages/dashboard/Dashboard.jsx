import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <Sidebar />
      </div>
      <div className="dashboard__right">
        <div className="dashboard__rightContent">
          <h1> Project Status Dashboard</h1>
          
          <div className="createButton">
            <Link to="/taskmanager" className="button">
              Create Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;