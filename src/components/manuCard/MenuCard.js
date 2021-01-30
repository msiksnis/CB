import "./MenuCard.css";

// function MenuCard() {
//   return (
//     <div className="menuCard">
//       <h1>Card</h1>
//     </div>
//   );
// }
function MenuCard({ src, title, description, price }) {
  return (
    <div className="menuCard">
      <img src={src} alt="" />
      <div className="menuCard__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <div className="menuCard__bottom">
          <h3>{price}</h3>
          <span className="menuCard__order">Order Now</span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
