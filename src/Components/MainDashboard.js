import React, { useEffect, useState } from "react";
import logo from "./Aqify project/FrameWhiteLogo.svg";
import folder from "./ProfileDashbaord/folder.svg";
import address from "./ProfileDashbaord/addressbook.svg";
import list from "./ProfileDashbaord/listnumbers.svg";
import bell from "./ProfileDashbaord/bell.svg";
import setting from "./ProfileDashbaord/gear.svg";
import tag from "./ProfileDashbaord/tag.svg";
import analytic from "./ProfileDashbaord/VectorAnalytics.svg";
import heart from "./ProfileDashbaord/VectorHeart.svg";
import proof from "./ProfileDashbaord/VectorProof.svg";

//card content
import { Link, Outlet } from "react-router-dom";
import message from "./ProfileDashbaord/chatteardropdots.svg";
import logo1 from "./SignIn/vector.svg";
import TopMessage from "./TopMessage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ENV from "../config.js";

import { useNavigate } from "react-router-dom";
const MainDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [role, setRole] = useState("");
  const [navCollapse, setNavCollapse] = useState(false);

  useEffect(() => {
    const getUsername = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        try {
          const response = await axios.get(`${ENV.BACKEND_URL}/users/getUser`, {
            headers: { "x-auth-token": id },
          });
          setRole(response.data.user.role);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getUsername();
  }, [setRole]);

  return (
    <>
      <section className="profile-section">
        <nav
          className={`navbar navbar-expand-lg dashboard ${navCollapse ? "navCollaspe" : ''}`}
          style={{ top: "0px" }}
        >
          <div class="container-fluid" style={{ padding: "0rem" }}>
            <button
              style={{ margin: "0 1.5rem" }}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              style={{ left: "0", transform: "translateX(-100%)" }}
              class="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  <Link className="navbar-brand" to="/">
                    <img
                      src={logo1}
                      alt="Logo"
                      style={{ left: "0px" }}
                      className="Logo"
                    />
                  </Link>
                  <br />
                </h5>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body" style={{ left: "0px" }}>
                {/** */}
                <div class="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
                  {/** */}
                  <div className="d-flex justify-content-bewteen align-items-center">
                    <Link
                      to="/"
                      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                      <img className="dashLogo" src={logo} alt="" />
                      <br />
                      <br />
                      <br />
                    </Link>
                    <div>
                      <Link className="d-flex align-items-center" style={{ background: '#000', padding: '0.6rem', borderRadius: '200px' }} onClick={() => setNavCollapse(!navCollapse)}>
                        <img src={logo1} alt="Logo" style={{ width: "20px" }} className="" />
                      </Link>
                    </div>
                  </div>
                  {/** */}
                  <hr />
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to="/MainDashboard/Dashbaord"
                  >
                    <h2 className="dash"> Dashboard</h2>
                  </Link>
                  <ul class="nav flex-column mb-auto">
                    <li class="nav-item">
                      <Link
                        to="/MarketDash2"
                        class="nav-link1 text-white"
                        aria-current="page"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={list}
                          alt=""
                        />
                        <span>Lists</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/MainDashboard/favorites"
                        class="nav-link1 text-white"
                        aria-current="page"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={heart}
                          alt=""
                        />
                        <span>Favourite Lists</span>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link1 text-white dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <img className="dashIcon"
                              style={{ marginRight: "1rem" }}
                              src={folder}
                              alt=""
                            />
                            <span>My Projects</span>
                          </div>
                          <span><i class="fa-solid fa-circle-notch"></i></span>
                        </div>
                      </Link>
                      {role === "acquirer" && (
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/MyProject"
                            >
                              Project Buying
                            </Link>
                          </li>
                        </ul>
                      )}
                      {role === "owner" && (
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/ProjectBuying"
                            >
                              Projects Lists
                            </Link>
                          </li>
                        </ul>
                      )}
                      {role !== "acquirer" && role !== "owner" && (
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/MyProject"
                            >
                              Project Lists
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/ProjectBuying"
                            >
                              Projects Buying
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link
                        to="/MainDashboard/MyAnalytics"
                        class="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={analytic}
                          alt=""
                        />
                        <span>Analytics</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/MessageDash"
                        class="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={message}
                          alt=""
                        />
                        <span>Messages</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/Notification"
                        class="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={bell}
                          alt=""
                        />
                        <span>Notifications</span>
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link1 text-white dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <img className="dashIcon"
                              style={{ marginRight: "1rem" }}
                              src={setting}
                              alt=""
                            />
                            <span>Settings</span>
                          </div>
                          <span><i class="fa-solid fa-circle-notch"></i></span>
                        </div>
                      </Link>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link
                            class="dropdown-item"
                            to="/MainDashboard/proflie"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            to="/MainDashboard/ChangePassword"
                          >
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            to="/MainDashboard/PaymentDash"
                          >
                            Payments
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item">Connect</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/ProofFund"
                        class="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={proof}
                          alt=""
                        />
                        <span>Proof of Funds</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/PricingDash"
                        class="nav-link1 text-white"
                      >
                        <img className="dashIcon" style={{ marginRight: "1rem" }} src={tag} alt="" />
                        <span>pricings</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/contactDashboard"
                        class="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={address}
                          alt=""
                        />
                        <span>Contact us</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/DashValuation"
                        class="nav-link1 text-white"
                      >
                        <i
                          class="dashIcon fa-solid fa-calculator"
                          style={{
                            color: "#f5f5f5",
                            fontSize: "1.5rem",
                            margin: "0 1rem 0 0.5rem",
                          }}
                        ></i>
                        <span>Valuation Tools</span>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  {/* <div class="dropdown">
                            <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                 <img className="dashIcon"   src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><Link class="dropdown-item" to="#">Settings</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to="#">Sign out</Link></li>
                            </ul>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="sideContent">
          <TopMessage />
          {/* <Dashbaord /> */}

          <section>
            <Outlet />
          </section>
        </div>
      </section>
    </>
  );
};

export default MainDashboard;
