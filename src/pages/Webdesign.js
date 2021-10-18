import DesignIntro from "../components/DesignIntro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

export default function Webdesign (props){
    return(
        <div>
            <DesignIntro title="Web Design" text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."/>
            <section className="portfolio">
                <div className="container">
                <div class="row">
                <Portfolio title="EXPRESS" text="A multi-carrier shipping website for ecommerce businesses" src="./img/Express - Desktop.jpg" alt="express"/>  
                <Portfolio title="TRANSFER" text="Site for low-cost money transfers and sending money within seconds" src="./img/Transfer - Desktop.jpg"alt="transfer"/>  
                <Portfolio title="PHOTON" text="A state-of-the-art music player with high-resolution audio and DSP effects" src="./img/Photon - Desktop.jpg" alt="photon"/>  
                <Portfolio title="BUILDER" text="Connects users with local contractors based on their location" src="./img/Builder - Desktop.jpg" alt="builder"/>  
                <Portfolio title="BLOGR" text="Blogr is a platform for creating an online blog or publication" src="./img/Blogr - Desktop.jpg" alt="blogr"/>  
                <Portfolio title="CAMP" text="Get expert training in coding, data, design, and digital marketing" src="./img/Camp - Desktop.jpg" alt="camp"/>  
            </div>
            </div>
            </section>
            <div class="services">
                <div className="container">
              <div class="row">
                <Services link="./Appdesign" src="./img/app-design.jpg" alt="app-design" title="App design"/>
                <Services link="./Graphicdesign" src="./img/graphic-design.jpg" alt="graphic-design" title="Graphic design"/>
              </div>
              </div>
            </div>
        </div>
        
    );
}