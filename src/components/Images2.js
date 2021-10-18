import { Link } from "react-router-dom";

export default function Images2(props){
    return(
         
                    <div className="row">
                    <div className=".col-lg-12 col-md-12 ">
                        <div className="gen-2 pad">
                        <img className="app " src={props.src} alt="app-design"/>
                          <div className=" design topic">
                            <h2 className="app-h">{props.title}</h2>
                            <Link className="app-a" to={props.link}>VIEW PROJECTS</Link>
                          </div>
                        </div>
                    </div>
                </div>
                
    );
}