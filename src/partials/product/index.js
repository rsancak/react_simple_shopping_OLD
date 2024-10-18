
import './style.scss';
import imageProduct from '../../assets/img/p3.png'

function Product() {
  return (
    <div className="box">
      <a href="/">
        <div className="img-box">
          <img src={imageProduct} alt="" />
        </div>
        <div className="detail-box">
          <h6>
            Ring
          </h6>
          <h6>
            Price
            <span>
              $200
            </span>
          </h6>
        </div>
        <div className="new">
          <span>
            New
          </span>
        </div>
      </a>
    </div>
  );
}

export default Product;