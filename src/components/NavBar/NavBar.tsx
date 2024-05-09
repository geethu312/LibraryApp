import { useState } from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar2({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse
         navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  key={index}
                  className={
                    selectedIndex === index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href={`/${items.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
          <form className="d-flex me-3">
            <p
              className="nav-item"
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Login
            </p>
            <p
              className="nav-item"
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              Donate
            </p>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
