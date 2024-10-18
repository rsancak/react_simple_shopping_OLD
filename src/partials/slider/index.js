import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.scss';
import image1 from '../../assets/img/slider-img.png';
import { useEffect } from 'react';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
let owl_carousel = require('react-owl-carousel');
window.fn = owl_carousel;

function MainSlider() {
    useEffect(() => {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayHoverPause: true,
                items: 1
            })
        });
    });
    return (
        <section className="slider_section">
            <div className="slider_container">
                <div className="owl-carousel">
                    <div className="item active">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="detail-box">
                                        <h1>
                                            Welcome To Our <br />
                                            Gift Shop
                                        </h1>
                                        <p>
                                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error
                                            distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                                            maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                        </p>
                                        <a href="/">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="img-box">
                                        <img src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="detail-box">
                                        <h1>
                                            Welcome To Our <br />
                                            Gift Shop
                                        </h1>
                                        <p>
                                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error
                                            distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                                            maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                        </p>
                                        <a href="/">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="img-box">
                                        <img src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="detail-box">
                                        <h1>
                                            Welcome To Our <br />
                                            Gift Shop
                                        </h1>
                                        <p>
                                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error
                                            distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                                            maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                        </p>
                                        <a href="/">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="img-box">
                                        <img src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSlider;