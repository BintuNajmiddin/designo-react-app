export default function Solutions(props){
    return(

    <section className="solutions" > 
    <div className="container">
        <div className="bg" >
            <div className="inner-container ">
                <div className="row justify-content-between">
                    <div className="col-lg-8 ">
                        <div className="first-col">
                       <h1 className="page-title">{props.title}</h1>
                       <p className="page-text">{props.text}</p>
                       <button className="more">Learn More</button>
                    </div>
                    </div>
                    <div className="col-lg-4">
                        <img className="phone" src="img/phone.png" alt="phone"/>
                    </div>
            </div>
            </div>
        </div>
    </div>
</section>
    );
}