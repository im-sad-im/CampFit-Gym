// import NavbarNav from "../components/Nav/NavbarNav";
import Hero from "../components/Hero/Hero";
import Support from "../components/Support/Support";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact/ContactForm";
import Contactbox from "../components/contact/Contactbox";
import Ebook from "../components/ebook/Ebook";
import Footer from "../components/footer/Footer";
import SupportCard from "../components/supportCard/SupportCard";
// import Testimo from "../components/testimonials/Testimo";
import TestimonialBox from "../components/testimonials/TestimonialBox";

function Home(){
    return(
        <>
        {/* <NavbarNav */}
        <Hero />
        <Support />
        <SupportCard />
        <Ebook />
        <ChooseUs />
        <TestimonialBox />
        {/* <ContactForm /> */}
        {/* <Contactbox /> */}
        <Contact />
        <Footer />
        </>
    )
}

export default Home;