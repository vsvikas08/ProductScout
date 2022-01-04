import { useState } from "react";
import Content from "./Content";
import ContentDetail from "./ContentDetail";

const ContentList = (props) => {
    // console.log("props", props);
    const { product } = props.state;
    console.log("product", product);
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="nav">
                <div className="search-container">
                    <input
                        id="key"
                        placeholder="Search Title"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    {/* <button id="search">Search</button> */}
                </div>
            </div>
            <div className="content-list">
                {product
                    .filter((val) => {
                        return val.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                    })
                    .map((item, idx) => {
                        return <Content product={item} key={idx} />;
                    })}

                {/* {product.map((item, idx) => {
                    return <Content product={item} />;
                })} */}
            </div>
        </div>
    );
};
export default ContentList;
