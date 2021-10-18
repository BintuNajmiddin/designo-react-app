import { Link } from "react-router-dom";

export default function Images(props){
    return(
                <div className="col-lg-6 col-md-12">
                    <div className=" gen-1">
                       <img src={props.src} alt="web-design"/>
                         <div className="web topic">
                           <h2 className="web-h">{props.title}</h2>
                           <Link className="web-a" to={props.link}>VIEW PROJECTS</Link>
                        </div>
                    </div>
                </div>
    );
}