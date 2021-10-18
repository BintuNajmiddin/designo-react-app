import { Link } from "react-router-dom";

export default function Services(props){
    return(       
            <div className="col-lg-6">
                <Link to={props.link} className="service">
                    <img src={props.src} alt={props.alt} className="service__image"/>
                    <span className="service__info">
                        <span className="service__title">{props.title}</span>
                        <span className="service__text">View projects</span>
                    </span>
                </Link>
            </div>

            // <div className="col-lg-6">
            //     <a href="graphic-design.html" className="service">
            //         <img src="img/graphic-design.jpg" alt="graphic-design" className="service__image">
            //         <span className="service__info">
            //             <span className="service__title">Graphic design</span>
            //             <span className="service__text">View projects</span>
            //         </span>
            //     </a>
            // </div>
      
    );
}