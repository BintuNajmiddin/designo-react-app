export default function Portfolio(props){
return(
                <div class="col-lg-4">
                    <div class="card">
                        <img src={props.src} alt={props.alt} class="card__image"/>
                        <div class="card__content">
                            <h3 class="card__title">{props.title}</h3>
                            <p class="card__text">{props.text}</p>
                        </div>
                    </div>
                </div>                      
);
}