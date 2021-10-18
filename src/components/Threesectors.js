export default function Threesectors(props){
    return(
                <div className="col-lg-4 box">
                    <img src={props.src} alt={props.alt}/>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>     
    );
}