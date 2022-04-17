import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className; //Whitespace after card is mandatory
  return <div className={classes}>{props.children}</div>;
};

export default Card;
