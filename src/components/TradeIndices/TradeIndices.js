import 'bootstrap-icons/font/bootstrap-icons.css';
import './TradeIndices.css'
import { cardData } from '../../utils/Constants'

const WhyTradeIndices = () => {
  return (
    <section className="gradient-section ">
      <div className="why-trade-flex">
        {cardData.map((card, index) => (
          <div key={index} className="why-trade-card">
            <div className="why-trade-icon">
              <img alt={card.icon} src={card.icon} />
            </div>
            <h3 className="why-trade-title">{card.title}</h3>
            <p className="why-trade-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTradeIndices;
