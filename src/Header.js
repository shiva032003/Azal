import "./Header.css";

function Header() {
    return (
      <div className="header">
        <img
          src="/logo.jpeg"
          className="logo"
          alt="Azal International Logo"
        />
  
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    );
  }
  
  export default Header;
  