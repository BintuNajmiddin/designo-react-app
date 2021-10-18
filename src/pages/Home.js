import Solutions from '../components/Solutions';
import Images from '../components/Images';
import Images2 from '../components/Images2';
import Threesectors from '../components/Threesectors';
import Getintouch from '../components/Getintouch';

export default function Home (props){
    return (
        <div>
            <Solutions title="Award-winning custom designs and digital branding solutions" text="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."/>
                <div className="images">
                    <div className="container">
                        <div className="row">
                            <Images src="./img/web-design.png" title="WEB DESIGN" link="/webdesign"/>  
                        <div className="col-lg-6 col-md-12">
                            <Images2 src="./img/app-design.png" title="APP DESIGN" link="/appdesign"/>  
                            <Images2 src="./img/graphic-design.png" title="GRAPHIC DESIGN" link="/graphicdesign"/>  
                        </div>
        <section className="three-sectors">
            <div className="container">
                <div className="row ">
                    <Threesectors src="./img/passionate.svg" alt="passionate" title="PASSIONATE" text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."/>
                    <Threesectors src="./img/resourceful.svg" alt="resourceful" title="RESOURCEFUL" text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."/>
                    <Threesectors src="./img/friendly.svg" alt="friendly" title="FRIENDLY" text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."/>
                </div>
            </div>
        </section>
        <Getintouch title="Let’s talk about your project" text="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."/>
                    </div>
                </div>
            </div>
        </div>
 );
};