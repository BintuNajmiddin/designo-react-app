import { Link } from "react-router-dom" 
 
 export default function Header(){
    return(
        <header className="main-header">
            <div className="container">
            <div className="row sec-row justify-content-between">
              <Link to="/" className="navbar-brand col-auto"><img src="./img/logo.png" alt="logo"/></Link>
              <nav className="main-nav d-flex col-auto">
              <Link className=" head nav-link " aria-current="page" to="./about">OUR COMPANY</Link>
              <Link className=" head nav-link" to="./location">LOCATIONS</Link>
              <Link className=" head nav-link" to="./contact">CONTACT</Link>
              </nav>
                    {/* <!-- <button className="menu-toggle open" onclick="openMenu()"><img src="img/menu.svg" alt="menu"></button>
                    <button className="menu-toggle close" onclick="closeMenu()"><img src="img/close.svg" alt="closemenu"></button> --> */}
                </div>
            </div>
    </header>
    )
}