import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faTruckArrowRight, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import './style.scss';

function ShopWithUs() {
  return (
    <section className="shop-with-us_section">
      <div className="row">
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
              <FontAwesomeIcon icon={faTruckArrowRight} />
            </div>
            <div className="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
              <FontAwesomeIcon icon={faBasketShopping} />
            </div>
            <div className="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopWithUs;