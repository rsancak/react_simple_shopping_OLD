import { useEffect } from 'react';
import Product from '../../partials/product';
global.jQuery = require('jquery');
var $ = global.jQuery;

function Shop() {
    useEffect(() => {
        $('li.active').removeClass("active");
        $('a[href="' + window.location.pathname + '"]').parent().addClass("active");
    });
    return (
        <section className="shop_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;