// import NavbarNav from "../components/Nav/NavbarNav";
import Hero from "../components/Hero/Hero";
import Support from "../components/Support/Support";
import ChooseUs from "../components/chooseUs/ChooseUs";
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
        <Footer />
        </>
    )
}

export default Home;