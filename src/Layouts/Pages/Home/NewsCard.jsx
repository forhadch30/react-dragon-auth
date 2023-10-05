import { Link } from "react-router-dom";


const NewsCard = ({news1}) => {
    const {title,image_url,details, _id} = news1
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-16 border-b-2">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length > 200 ?

        <p>{details.slice(0,150)} <Link to={`/news1/${_id}`} className="text-green-500">Read More....</Link></p>

        : <p>{details}</p>
    }
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default NewsCard;