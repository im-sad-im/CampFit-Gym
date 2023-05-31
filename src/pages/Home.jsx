// import NavbarNav from "../components/Nav/NavbarNav";
import Hero from "../components/Hero/Hero";
import Support from "../components/Support/Support";
import ChooseUs from "../components/chooseUs/ChooseUs";
import SupportCard from "../components/supportCard/SupportCard";

function Home(){
    return(
        <>
        {/* <NavbarNav */}
        <Hero />
        <Support />
        <SupportCard />
        <ChooseUs />
        </>
    )
}

export default Home;