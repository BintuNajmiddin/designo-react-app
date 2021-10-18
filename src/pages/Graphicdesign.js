import DesignIntro from '../components/DesignIntro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';

export default function Graphicdesign (props){
    return (
        <div>
            <DesignIntro title="Graphic Design" text="We deliver eye-catching branding materials that are tailored to meet your business objectives."/>

            <section className="portfolio">
                <div className="container">
                <div class="row">
                <Portfolio title="TIM BROWN" text="A book cover designed for Tim Brown’s new release, ‘Change’ " src="./img/tim-brown.jpg" alt="tim-brown"/>  
                <Portfolio title="BOXED WATER" text="A simple packaging concept made for Boxed Water" src="./img/boxed-water.jpg"alt="boxed-water"/>  
                <Portfolio title="SCIENCE!" text="A poster made in collaboration with the Federal Art Project" src="./img/science.jpg" alt="science"/>
            </div>
            </div>
            </section>

            <div class="services">
                <div className="container">
              <div class="row">
                <Services link="./Appdesign" src="./img/app-design.jpg" alt="app-design" title="App design"/>
                <Services link="./Webdesign" src="./img/web-design.jpg" alt="web-design" title="Web design"/>
              </div>
              </div>
            </div>
        </div>
    );
};