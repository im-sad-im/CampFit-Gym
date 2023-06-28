import BreadcrumbsBanner from "../../components/about/BreadcrumbsBanner";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function Schedule(){
    return(
        <section id="schedule">
        <BreadcrumbsBanner heading={"Schedule"} currentPage={"schedule"}/>
             <div className="container">
        </div>
        <Contact />
        <Footer />
        </section>
       
    );
}
