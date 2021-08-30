import "./header.style.css";
const Header = () => {
  return (
    <>
      <header className="header_area">
        <nav className="nav_bar">
          <div className="nav_bar-logo">JR</div>
          <div className="collapse">
            <ul className="menu_nav">
              <li className="nav-item">
                <a href="">HOME</a>
              </li>
              <li className="nav-item">
                <a href="">ABOUT</a>
              </li>
              <li className="nav-item">
                <a href="">SERVICES</a>
              </li>
              <li className="nav-item">
                <a href="">PAGES</a>
              </li>
              <li className="nav-item">
                <a href="">BLOG</a>
              </li>
              <li className="nav-item">
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
