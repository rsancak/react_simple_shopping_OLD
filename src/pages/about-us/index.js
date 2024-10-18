import { useEffect } from "react";
global.jQuery = require('jquery');
var $ = global.jQuery;

function AboutUs() {
    useEffect(() => {
        $('li.active').removeClass("active");
        $('a[href="' + window.location.pathname + '"]').parent().addClass("active");
    });
    return (
        <div className="about-us p-5 pb-2">
            <figure>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt ante ac tincidunt consequat. Sed a volutpat elit. Etiam vulputate consequat sapien in vestibulum. Proin ultricies finibus lobortis. Mauris sit amet aliquam augue, a accumsan tortor. Sed eleifend pellentesque sapien quis varius. Nullam non erat ante. Sed a laoreet lacus, eu eleifend est. Ut vel ante vitae sem molestie placerat. Quisque posuere fringilla commodo. Fusce nec urna et erat vestibulum cursus ac eget nisl. Duis ornare fermentum nulla. Curabitur nisl erat, tincidunt non convallis id, dictum non odio. Donec ut leo quis justo iaculis euismod et et lectus.<br /><br />

                Vestibulum sed augue quis nisl elementum dignissim. Vivamus euismod bibendum hendrerit. Vivamus lacinia sollicitudin pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere efficitur mauris. Suspendisse scelerisque ullamcorper ante, id sollicitudin lorem efficitur nec. Quisque risus est, commodo eu feugiat a, porta et nulla. Quisque tincidunt porta ante. Praesent nec semper odio. Duis scelerisque nulla vitae gravida fermentum. Quisque cursus erat vitae rhoncus hendrerit. Sed iaculis lorem id quam aliquet, et varius sapien tempus. Ut interdum lacus at lectus sollicitudin tristique. Cras vitae lacinia mauris. Quisque sed sem quis nibh semper iaculis ut sit amet enim.<br /><br />

                Aenean quis vulputate justo. Nunc pretium luctus ipsum, et vulputate neque. Praesent imperdiet id nibh fermentum iaculis. Maecenas turpis dolor, gravida nec dignissim ac, varius non eros. In sed felis facilisis, facilisis libero sit amet, hendrerit ipsum. Nam gravida, est ac maximus porttitor, diam enim vulputate tellus, vel tincidunt ex lacus at purus. Sed gravida feugiat lacinia. Curabitur elementum lectus quis urna condimentum tincidunt. Etiam nec cursus metus.</p>
        </div>
    );
}

export default AboutUs;