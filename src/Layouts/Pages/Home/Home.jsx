import Header from "../Shrared/Header/Header";
import LeftSede from "../Shrared/LeftSede/LeftSede";
import Navbar from "../Shrared/Navbar/Navbar"
import RightSide from "../Shrared/RightSide/RightSide";
import News from "./News";
const Home = () => {
    return (
        <div>
           <Header></Header>
           <News></News>
           <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="">
                    <LeftSede></LeftSede>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">News coming soon...</h2>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;