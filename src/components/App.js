import ContentList from "./ContentList";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import ContentDetail from "./ContentDetail";
import { Route } from "react-router-dom";

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

    handleClick = (product) => {};
    handleTime = () => {
        setTimeout(function () {
            console.log("Time out");
        }, 4000);
    };
    render() {
        return (
            <div className="app">
                {/* <Navbar /> */}
                <Route exact path="/">
                    <ContentList
                        state={this.state}
                        handleClick={this.handleClick}
                    />
                </Route>
                <Route path="/detail/:id">
                    <ContentDetail product={this.state} />
                </Route>
            </div>
        );
    }
}

export default App;
