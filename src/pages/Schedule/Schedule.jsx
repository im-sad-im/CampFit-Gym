import Container from "react-bootstrap/esm/Container";
import BreadcrumbsBanner from "../../components/about/BreadcrumbsBanner";
import ContactUs from "../../components/contact/ContactUs";
import Footer from "../../components/footer/Footer";
import Button from "react-bootstrap/Button"
import { Link, Outlet } from "react-router-dom";

export default function Schedule() {
    return (
        <section id="schedule">
            <BreadcrumbsBanner heading={"Schedule"} currentPage={"schedule"} />
            <Container className="my-5">
                <h1 className="font-head sub-sub-heading text-center">Schedule by </h1>
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    <Link to='/schedule/monday'>
                        <Button className="btn-main my-btn">Monday</Button>
                    </Link>
                    <Link to="/schedule/tuesday">
                        <Button className="btn-main my-btn">Tuesday</Button>
                    </Link>
                    <Link to='/schedule/wednesday'>
                        <Button className="btn-main my-btn">Wednesday</Button>
                    </Link>
                    <Link to='/schedule/thursday'>
                        <Button className="btn-main my-btn">Thursday</Button>
                    </Link>
                    <Link to='/schedule/friday'>
                        <Button className="btn-main my-btn">Friday</Button>
                    </Link>
                    <Link to='/schedule/saturday'>
                        <Button className="btn-main my-btn">Saturday</Button>
                    </Link>
                    <Link to='/schedule/sunday'>
                        <Button className="btn-main my-btn">Sunday</Button>
                    </Link>
                </div>
            </Container>
            <Outlet />
            <ContactUs />
            <Footer />
        </section>

    );
}
