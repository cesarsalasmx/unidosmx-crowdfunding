import React from "react";
import { Link } from "gatsby";
import LogoImage from "../../assets/images/unidos-mx-logo-pruple.png";
const Header = () => {
    return (
        <div className="main-header">
        <div className="d-flex">
        
            <div className="main-title">
                <img src={LogoImage} width="100" alt="awesome post" />
            </div>
        </div>

        <div className="d-flex align-items-center">

            <div className="dropdown d-inline-block mt-12">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       
                        <span className="info d-xl-inline-block  color-span">
                            <span className="d-block fs-20 font-w600">César Salas</span>
                            <span className="d-block mt-7" >cesar.Salas@gmail.com</span>
                        </span>
                            
                        <i className='bx bx-chevron-down'></i>
                    </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item" to="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span>Profile</span></Link>
                    <Link className="dropdown-item" to="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span>My Wallet</span></Link>
                    <Link className="dropdown-item d-block" to="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span>Settings</span></Link>
                    <Link className="dropdown-item" to="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span>Lock screen</span></Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item text-danger" to="user-login.html"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span>Logout</span></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;