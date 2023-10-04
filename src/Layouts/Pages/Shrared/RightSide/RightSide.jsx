import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter,} from 'react-icons/fa';
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'
const RightSide = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With GutHub
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-8">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                <FaFacebook className='mr-4'></FaFacebook>
                facebook
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="">
                <FaTwitter className='mr-4'></FaTwitter>
                Twitter
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
             
                <FaInstagram className='mr-4'></FaInstagram>
               instagram
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />
            </div>
            <div>
                <h2 className='border text-center mb-5'>Create an <br /> Amazing <br /> Newspaper</h2>
                <p className='text-center border mb-5'>Discover thousands of <br /> options, easy to <br /> customize layouts,  one- <br />click to import demo br  and much more.</p>
                <button className='bg-[#D72050;] py-3 px-2 text-white rounded'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSide;