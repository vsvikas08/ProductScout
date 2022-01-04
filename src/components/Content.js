const Content = (props) => {
    console.log("This is content page");
    console.log("Props", props);
    const { product } = props;
    return (
        <div className="content">
            <img className="content-img" src={product.img} />
            <h3 className="content-title">{product.title}</h3>
        </div>
    );
};
export default Content;
