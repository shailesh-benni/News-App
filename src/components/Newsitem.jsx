import defaultImage from '../assets/default.JPG';

const Newsitem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "300px"}}>
      <img src={src ? src : defaultImage} style={{height: "200px", width: "280px"}} className="card-img-top" alt={title || "News Image"} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News Nahi hai YouTube dekh le Bhai :)"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem
