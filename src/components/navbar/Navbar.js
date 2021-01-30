import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">City Burgers</div>
      </div>
      <div className="navbar__center">
        <span className="navbar__links">Menu</span>
        <span className="navbar__links">Order Now</span>
        <span className="navbar__links">Career</span>
        <span className="navbar__links">About</span>
      </div>
      <div className="navbar__right">
        <div className="navbar__user">
          <span className="navbar__login">LogIn</span>
          <span className="navbar__pay">$0.00</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
