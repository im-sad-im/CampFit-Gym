import BreadcrumbsBanner from "../../components/about/BreadcrumbsBanner";
import Footer from "../../components/footer/Footer";

export default function Gallery(){
    return(
        <section className="gallery">
        <BreadcrumbsBanner heading={"Gallery"} currentPage={"Gallery"}/>
        <div className="container">
            <h1>Gallery page</h1>
        </div>
        <Footer />
        </section>
    )
}