import React from "react";
import ContentList from "./ContentList";
import Navbar from "./Navbar";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <ContentList />
            </div>
        );
    }
}

export default App;
