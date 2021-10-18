import { Link } from "react-router-dom";

export default function Footer(){
    return(
      <footer className="main-footer">
          <div className="container">
            <div className="row justify-content-between ">
              <Link to="/" className="navbar-brand col-auto"><img src="./img/logo-white.png" alt="logo"/></Link>
              <nav className="main-nav d-flex col-auto">
              <Link className=" head nav-link white" aria-current="page" to="/">OUR COMPANY</Link>
              <Link className=" head nav-link white" to="./location">LOCATIONS</Link>
              <Link className=" head nav-link white" to="./contact">CONTACT</Link>
              </nav>
              <hr class="line"/>
            </div>
    <div class="last-footer">
        <div class="row">
              <div class="col-lg-4 adress">
                   <Link to="#">Designo Central Office </Link>
                   <Link to="#"> 3886 Wellington Street</Link>  
                   <Link to="#"> Toronto, Ontario M9C 3J5</Link>  
                </div>
              <div className="col-lg-4 adress">
                  <Link to="/">Contact Us (Central Office) </Link>
                    <Link to="tel:+1 253-863-8967">P : +1 253-863-8967</Link>
                    <Link to="https:// contact@designo.co"> M : contact@designo.co</Link>
              </div>
              <div className="col-lg-4">
                  <Link className="social" target="_blank" to="https://www.facebook.com"><i className="icon-facebook"></i></Link>
                  <Link className="social" target="_blank" to="https://www.youtube.com"><i className="icon-youtube"></i></Link>
                  <Link className="social" target="_blank" to="https://twitter.com"><i className="icon-twitter"></i></Link>
                  <Link className="social" target="_blank" to="https://www.pinterest.com"><i className="icon-pinterest"></i></Link>
                  <Link className="social" target="_blank" to="https://www.instagram.com"><i className="icon-instagram"></i></Link>
              </div>
            </div>
            </div>
         </div>  
    </footer>

    );
}