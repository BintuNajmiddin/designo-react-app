export default function DesignIntro(props){
    return(
        <div class="intro">
            <div className="container">
        <div class="design-page-title ">
            <h1 class="page-title__heading">{props.title}</h1>
            <h2 class="page-title__text">{props.text}</h2>
        </div>
            </div>
        </div>
    );
}