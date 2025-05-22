import 'bootstrap-icons/font/bootstrap-icons.css';
import './TradeIndices.css';
import Trader from '../../assets/ctrader.svg'
import Discount from '../../assets/Discount.svg'
import Group1 from '../../assets/Group 1000001697.svg'
import Group2 from '../../assets/Group1000001696.svg'
import MoneyBag from '../../assets/MoneyBag.svg'



const cardData = [
  {
    icon: Group1,
    title: 'Explore Major Indices',
    description: 'Access over 20 Indices, including the US30 and UK100, so you can invest in top companies through a single instrument.'
  },
  {
    icon:Trader ,
    title: 'Industry Leading Conditions',
    description: 'We’re the top choice for Index traders, offering spreads from 0.0 pips and deep liquidity for seamless trading.'
  },
  {
    icon: Discount,
    title: 'Competitive Pricing',
    description: 'We offer competitive CFD pricing, including commission-free options, to help your investment go further.'
  },
  {
    icon: Group2,
    title: 'User-Friendly Platform',
    description: 'Trade Indices on MetaTrader 5 and TradingView allowing you to trade on the world’s biggest investment platform.'
  },
  {
    icon: MoneyBag,
    title: 'Small Funding for Big Opportunities',
    description: 'Begin your Index trading journey with a low initial investment, so you can diversify your portfolio.'
  }
];

const WhyTradeIndices = () => {
  return (
    <section className="gradient-section ">
      <div className="why-trade-flex">
        {cardData.map((card, index) => (
          <div key={index} className="why-trade-card">
            <div className="why-trade-icon">
              <img alt={card.icon} src={card.icon}/>
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
