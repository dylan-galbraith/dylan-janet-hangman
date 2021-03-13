import Puzzle from "./Puzzle";
import Header from "./Header";

function Homepage() {
    return (
        <main className="main">
            <div className="main__top">
                <Header />
            </div>
            <Puzzle />
            
        </main>
    );
}

export default Homepage;