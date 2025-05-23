import 'bootstrap-icons/font/bootstrap-icons.css';
import './TradeIndices.css';
import * as Icons from '../../assets'

const cardData = [
  {
    icon: Icons.Group1,
    title: 'Explore Major Indices',
    description: 'Access over 20 Indices, including the US30 and UK100, so you can invest in top companies through a single instrument.'
  },
  {
    icon:Icons.Trader ,
    title: 'Industry Leading Conditions',
    description: 'We’re the top choice for Index traders, offering spreads from 0.0 pips and deep liquidity for seamless trading.'
  },
  {
    icon: Icons.Discount,
    title: 'Competitive Pricing',
    description: 'We offer competitive CFD pricing, including commission-free options, to help your investment go further.'
  },
  {
    icon: Icons.Group2,
    title: 'User-Friendly Platform',
    description: 'Trade Indices on MetaTrader 5 and TradingView allowing you to trade on the world’s biggest investment platform.'
  },
  {
    icon: Icons.MoneyBag,
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
