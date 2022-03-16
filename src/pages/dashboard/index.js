import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/header";
import General from "../../components/dashboard/general";
import "../../assets/css/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeDashboard = () => (
    <div>
        <Header />
        <Sidebar />
        <General />
    </div>
    
);

export default HomeDashboard;