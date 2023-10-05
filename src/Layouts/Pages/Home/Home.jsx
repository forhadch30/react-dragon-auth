import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import News from "./News";
import Header from "../Shrared/Header/Header";
import LeftSede from "../Shrared/LeftSede/LeftSede";
import Navber from "../Shrared/Navbar/Navbar";
import RightSide from "../Shrared/RightSide/RightSide";
const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (    
        <div>
            <Header></Header>
            <News></News>
            <Navber></Navber>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="border">
             <LeftSede></LeftSede>
            </div>
            {/* news container */}
            <div className="md:col-span-2 border">
            {
                news.map(news1 =><NewsCard key={news1._id} news1 ={news1} ></NewsCard>)
            }
            </div>
            <div className="border">
               <RightSide></RightSide>
            </div>
           </div>
        </div>
    );
};

export default Home;