import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ type = "main" }) {
  const navRef = useRef(null);
  const location = useLocation(); // 현재 경로 감지

  const toggleMenu = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("show");
    }
  };

  // 현재 경로가 특정 경로(혹은 그 하위 경로 포함)인지 확인하는 함수
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <header className={`header ${type}-header`}>
      <div className="logo">
        <Link to="/">ICONIC CREATIVE STUDIO</Link>
      </div>

      <button className="mobile-btn" onClick={toggleMenu}>
        <span></span>
        <span></span>
      </button>

      <nav ref={navRef} className="accordion-menu nav-menu">
        <ul>
          <li className={isActive("/Artists") ? "active" : ""}>
            <Link to="/Artists">ARTISTS</Link>
          </li>
          <li className={isActive("/Production") ? "active" : ""}>
            <Link to="/Production">PRODUCTION</Link>
          </li>
          <li className={isActive("/About") ? "active" : ""}>
            <Link to="/About">ABOUT</Link>
          </li>
          <li className={isActive("/Contact") ? "active" : ""}>
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
