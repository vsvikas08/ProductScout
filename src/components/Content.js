import { NavLink } from "react-router-dom";

const Content = (props) => {
    // console.log("This is content page");
    // console.log("Props", props);
    const { product } = props;
    return (
        <div className="content">
            <NavLink className="nav-link" to={`/detail/${product.cid}`}>
                <img className="content-img" src={product.img} />
                <h3 className="content-title">{product.title}</h3>
            </NavLink>
        </div>
    );
};
export default Content;
