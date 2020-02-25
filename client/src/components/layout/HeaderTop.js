import React from "react";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 d-flex">
            <a href="index-2.html" className="site-logo">
              Retent
            </a>
            <a
              href="#"
              className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
            >
              <span className="icon-menu h3" />
            </a>
          </div>
          <div className="col-12 col-lg-6 ml-auto d-flex">
            <div className="ml-md-auto top-social d-flex align-items-center">
              {/* <div className="p-3">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="p-3">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="p-3">
                <i className="fab fa-skype"></i>
              </div> */}
            </div>
            <form action="#" className="search-form d-inline-block">
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Search..."
                />
                {/* <button type="submit" className="btn btn-secondary">
                  <i class="fas fa-search"></i>
                </button> */}
              </div>
            </form>
          </div>
          <div className="col-6 d-block d-lg-none text-right"></div>
        </div>
      </div>
      <div id="sticky-wrapper" className="sticky-wrapper">
        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container p-0" style={{ borderTop: "1px solid #223458"}}>
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li className="active">
                      <a href="index-2.html" className="nav-link text-left">
                        Web
                      </a>
                    </li>
                    <li>
                      <a href="categories.html" className="nav-link text-left">
                        Mobile
                      </a>
                    </li>
                    <li>
                      <a href="categories.html" className="nav-link text-left">
                        Database
                      </a>
                    </li>
                    <li>
                      <a href="categories.html" className="nav-link text-left">
                        Design Pattern
                      </a>
                    </li>
                    <li>
                      <a href="categories.html" className="nav-link text-left">
                        Programming
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" className="nav-link text-left">
                        Server Side
                      </a>
                    </li>
                    <li>
                      <a href="categories.html" className="nav-link text-left">
                        UI/UX
                      </a>
                    </li>
                    <li>
                      <a href="categories.html" className="nav-link text-left">
                        English
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
