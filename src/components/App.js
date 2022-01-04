import ContentList from "./ContentList";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

class App extends React.Component {
    state = {
        product: [],
    };
    componentDidMount() {
        fetch(
            "https://xmf90s7q72.execute-api.ap-south-1.amazonaws.com/prod/products"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    product: data.products,
                });
                // console.log("State", this.state);
            });
    }
    render() {
        return (
            <div className="app">
                {/* <Navbar /> */}
                <ContentList state={this.state} />
            </div>
        );
    }
}

export default App;
