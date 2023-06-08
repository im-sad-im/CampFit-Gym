import chooseImage from "../../assets/img/choose-us/chooseUsImg.png"


function ChooseUs(){
    return(
        <section id="chooseUs" className="choose-us ebook-img-wrapper">
        <div className="container d-flex gap-4">
                    <div className="choose-us-content">
                        <h2 className="text-uppercase">what makes you <span className="primary-text-color">sure</span> to choose us?</h2>
                        <ol>
                            <li>Campfit provides free boxing arena and pool facitlites for those who have premium members</li>
                            <li>There is a cold and comfortable resting rooom for members</li>
                            <li>Free overseas vacation tickets for members who subscribe for more than 6 months</li>
                            <li>Yoga area for friends who want to relax the body</li>
                        </ol>
                    </div>
                        <div>
                        <img  src={chooseImage} alt="choose us image" />
                        </div>
                </div>
        </section>
)
}

export default ChooseUs;