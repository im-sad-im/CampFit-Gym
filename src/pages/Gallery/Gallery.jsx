import { Outlet } from "react-router-dom";
import BreadcrumbsBanner from "../../components/about/BreadcrumbsBanner";
import Footer from "../../components/footer/Footer";

export default function Gallery() {
    return (
        <section className="gallery">
            <BreadcrumbsBanner heading={"Gallery"} currentPage={"Gallery"} />
            <div className="container text-center">
                <h1>Gallery page</h1>
            </div>
            <Outlet />
            <Footer />
        </section>
    )
}