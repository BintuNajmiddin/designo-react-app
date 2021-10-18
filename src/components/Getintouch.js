export default function Getintouch(props){
    return(
        <section class="get-in-touch">
        <div class="container">
            <div class="bg-touch">
                <div class="inner-container">
                    <div class="row justify-content-between">
                <div class="col-lg-6  col-md-12 texts">
                   <h3 class="talk">{props.title}</h3>
                   <p class="touch-topic">{props.text}</p>
                </div>
                <div class="col-lg-6 geting col-md-12 ">
                    <div class="getting">
                    <button class="touch" href="#">GET IN TOUCH</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </section>
    );
}