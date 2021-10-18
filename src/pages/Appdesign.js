import DesignIntro from "../components/DesignIntro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";


export default function Appdesign (props){
    return (
        <div>
           <DesignIntro title="App Design" text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."/>
           <section className="portfolio">
                <div className="container">
                <div class="row">
                <Portfolio title="AIRFILTER" text="Solving the problem of poor indoor air quality by filtering the air" src="./img/Airfilter.jpg" alt="Airfilter"/>  
                <Portfolio title="EYECAM" text="Product that lets you edit your favorite photos and videos at any time" src="./img/eyecam.jpg"alt="eyecam"/>  
                <Portfolio title="FACEIT" text="Get to meet your favorite internet superstar with the faceit app" src="./img/faceit.jpg" alt="faceit"/>  
                <Portfolio title="TODO" text="A todo app that features cloud sync with light and dark mode" src="./img/todo.jpg" alt="todo"/>  
                <Portfolio title="LOOPSTUDIOS" text="A VR experience app made for Loopstudios" src="./img/loopstudios.jpg" alt="loopstudios"/>  
            </div>
            </div>
            </section> 
            <div class="services">
                <div className="container">
              <div class="row">
                <Services link="./Webdesign" src="./img/web-design.jpg" alt="web-design" title="Web design"/>
                <Services link="./Graphicdesign" src="./img/graphic-design.jpg" alt="graphic-design" title="Graphic design"/>
              </div>
              </div>
            </div>
        </div>
    );
};