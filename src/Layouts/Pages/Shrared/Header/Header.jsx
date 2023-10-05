import Marquee from "react-fast-marquee";
import logo from "../../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center">
           <Marquee className="bg-sky-orange text-white" pauseOnHover={true} speed={100}>
           <img className="mx-auto" src={logo} alt="" />
           </Marquee>
           <Marquee className="bg-sky-400 py-2 text-white" pauseOnHover={true} speed={100}>
           <p>Journalism Without Fear or Favour</p>
           </Marquee>
           <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;