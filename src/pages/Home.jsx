// import NavbarNav from "../components/Nav/NavbarNav";
import Hero from "../components/Hero/Hero";
import Support from "../components/Support/Support";
import Champion from "../components/champion/Champion";
import ChooseUs from "../components/chooseUs/ChooseUs";
import ContactUs from "../components/contact/ContactUs";
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
        <Champion />
        <ChooseUs />
        <TestimonialBox />
        <ContactUs />
        <Footer />
        </>
    )
}

export default Home;