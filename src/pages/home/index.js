import MainSlider from '../../partials/slider';
import MainBanner from '../../partials/banner';
import ShopWithUs from '../../partials/shop-with-us';
import { useEffect } from 'react';
global.jQuery = require('jquery');
var $ = global.jQuery;

function Home() {
    useEffect(() => {
        $('li.active').removeClass("active");
        $('a[href="' + window.location.pathname + '"]').parent().addClass("active");
    });
    return (
        <>
            <MainSlider />
            <MainBanner />
            <ShopWithUs />
        </>
    );
}

export default Home;