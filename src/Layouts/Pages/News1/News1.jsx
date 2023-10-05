import { useParams } from "react-router-dom";
import Header from "../Shrared/Header/Header";
import Navber from "../Shrared/Navbar/Navbar";
import RightSide from "../Shrared/RightSide/RightSide";

const News1 = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default News1;