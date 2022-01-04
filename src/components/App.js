import ContentList from "./ContentList";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import ContentDetail from "./ContentDetail";
import { Route } from "react-router-dom";
import axios from "axios";

const url =
    "https://xmf90s7q72.execute-api.ap-south-1.amazonaws.com/prod/products";
const baseUrl =
    "https://xmf90s7q72.execute-api.ap-south-1.amazonaws.com/prod/product";
class App extends React.Component {
    state = {
        product: [],
    };

    componentDidMount() {
        // fetch(
        //     "https://xmf90s7q72.execute-api.ap-south-1.amazonaws.com/prod/products"
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         this.setState({
        //             product: data.products,
        //         });
        //         // console.log("State", this.state);
        //     });

        axios.get(url).then((response) => {
            // console.log("Axios", response.data.products);
            this.setState({
                product: response.data.products,
            });
            // console.log("State", this.state);
        });
    }

    handleClick = (id, cnt) => {
        // console.log("clicked", id, cnt);
        const newCnt = String(parseInt(cnt) + 1);
        try {
            const response = axios.patch(baseUrl, {
                cid: id,
                updateKey: "cnt",
                updateValue: newCnt,
            });
            // console.log("Response", response);
        } catch (e) {
            console.log("Error");
        }
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
