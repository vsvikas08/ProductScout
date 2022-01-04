import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const url =
    "https://xmf90s7q72.execute-api.ap-south-1.amazonaws.com/prod/product?cid=";
const ContentDetail = (props) => {
    const { product } = props.product;
    let { id } = useParams();
    // console.log(id);

    // const detailProd = product.find((item) => item.cid === id);
    // console.log(detailProd);
    const [isLoading, setLoading] = useState(true);
    const [dstate, setDstate] = useState();

    useEffect(() => {
        // upDateCount();
        axios.get(url + id).then((res) => {
            // console.log("GET", res.data);
            setDstate(res.data);
            setLoading(false);
        });
        // console.log("obj", dstate.data);
    }, []);

    if (isLoading) {
        return (
            <div>
                <Navbar />
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <>
            <Navbar />
            <div className="content-detail">
                <div className="left-content">
                    <img className="detail-img" src={dstate.img} />
                    <h3>Count : {dstate.cnt}</h3>
                </div>
                <div className="right-content">
                    <h1 className="title">{dstate.title}</h1>
                    <h2 className="sub-title">{dstate.sub}</h2>
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
                        <p>{dstate.desc}</p>
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
