import "../styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="imageArea">
        <img src={props.image} alt="" />
      </div>
      <div className="title">{props.title}</div>
      <div className="bottomRow">
        <div className="price">${props.price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
