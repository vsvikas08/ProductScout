import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
const ContentDetail = (props) => {
    const { product } = props.product;
    let { id } = useParams();
    console.log(id);

    const detailProd = product.find((item) => item.cid === id);
    // console.log(detailProd);

    return (
        <>
            <Navbar />
            <div className="content-detail">
                <div className="left-content">
                    <img className="detail-img" src={detailProd.img} />
                </div>
                <div className="right-content">
                    <h1 className="title">{detailProd.title}</h1>
                    <h2 className="sub-title">{detailProd.sub}</h2>
                    <br />
                    <ul className="ul-cl">
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                    <div>
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 30 days return and exchanges</p>
                        <p>Try & Buy might be available</p>
                    </div>
                    <br />
                    <div>
                        <h3>Product Details</h3>
                        <p>{detailProd.desc}</p>
                    </div>
                    <div>
                        <h3>Size and Fit</h3>
                        <p>Slim Fit</p>
                        <p>Model height 6'</p>
                    </div>
                    <div>
                        <h3>Material Care</h3>
                        <p>100% Cotton</p>
                        <p>Machine-wash</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContentDetail;
