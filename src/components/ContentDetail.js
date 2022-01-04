function ContentDetail() {
    return (
        <div className="content-detail">
            <div className="left-content">
                <img
                    className="detail-img"
                    src="https://borderfree-assign-img.s3.ap-south-1.amazonaws.com/shirt1.jpg"
                />
            </div>
            <div className="right-content">
                <h1>Title</h1>
                <h2>Sub Title</h2>
                <br />
                <ul className="ul-cl">
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
                <br />
                <p>Description</p>
            </div>
        </div>
    );
}
export default ContentDetail;
