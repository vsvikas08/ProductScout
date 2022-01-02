import ContentList from "./ContentList";
import Navbar from "./Navbar";
import Amplify from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

function App() {
    return (
        <div className="app">
            <Navbar />
            <ContentList />
        </div>
    );
}

export default App;
