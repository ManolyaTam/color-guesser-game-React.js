import './colors-card.css';
import Card from '../card/card.component';

const renderCards = (arr) => arr.map((color, index) =>
  <div
    className='circle'
    key={"color_" + Date.now() + index}
    style={{ backgroundColor: color }}
  />
);

const ColorsCard = (props) => {
  let answers;
  if (props.colors)
    answers = props.colors;
  else
    answers = new Array(4).fill('#808080');

  return (
    <div className='colors-card'>
      <Card>
        {props.withClearBtn && <button className='clear-btn'>x</button>}
        {renderCards(answers)}
        {props.stats && <div className='stats'>
          CC:{0} <br /> CR:{0}
        </div>}
      </Card>
    </div>
  );
};
export default ColorsCard;