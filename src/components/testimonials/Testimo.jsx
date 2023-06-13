import image from "../../assets/img/testimonial/test.png"

export default function Testimo(){
    return(
        <section id="testimo">

            <div className="container">
            <h1>testimonials</h1>
                <div className="d-flex flex-column">
                    <p>What do they say?</p>
                    <p>
                        "Thank you Campfit for begin my mentor during training, and thank you for making my body ideal and strong, thank you once again for the world tournament that has put your trust in me :D"
                    </p>
                    <span>Selena Margaretha</span>
                    <span>2022</span>
                </div>
                <div>
                    <img src={image} />
                </div>
            </div>
        </section>
    );
}