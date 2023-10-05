import { useEffect, useState } from "react";
import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'
import img3 from '../../../../assets/3.png'
import { Link } from "react-router-dom";

const LeftSede = () => {
    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    },[])
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">All Categories</h2>
            <div>
            <Link>
            <button className="bg-gray-200 py-3 px-6 w-full text-[#403F3F] rounded">National News</button>
            </Link>
            </div>
            {
                categories.map(category =><Link className="block ml-20 text-xl font-semibold" key={category.id}>{category.name}</Link>)
            }
            <div className="p-4 space-y-3 mb-6">
                <img src={img1} alt="" />
                <h2 className="mt-8">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <img src={img2} alt="" />
                <h2 className="mt-8">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <img src={img3} alt="" />
                <h2 className="mt-8">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            </div>
        </div>
    );
};

export default LeftSede;