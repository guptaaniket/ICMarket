import React from 'react';
import './ICMarketsFooter.css';
import * as Icons from '../../assets'

const ICMarketsFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__logo-section">
                    <img
                        src={Icons.logo}
                        alt="IC Markets Global"
                        className="footer__logo footer__icon"
                    />
                    <p className="footer__description">
                        IC Markets Global mission is to create the best trading experience for retail and institutional clients alike,
                        allowing traders to focus more on their trading. Built by traders for traders IC Markets is dedicated to offering
                        superior spreads, execution and service.
                    </p>
                    <div className="footer__social">
                        <img className="footer__icon" src={Icons.socialMedia} alt='social' />
                        <img className="footer__icon" src={Icons.bottomLogo} alt='ic-market' />
                    </div>
                </div>

                <div className="footer__links">
                    <div className='footer-title'>
                        <h4>Forex Trading</h4>
                        <ul className='no-bullets'>
                            <li>Accounts Overview</li>
                            <li>Open an Account</li>
                            <li>Launch Web Trader</li>
                        </ul>
                    </div>
                    <div className='footer-title'>
                        <h4>Trading Specifications</h4>
                        <ul className='no-bullets'> 
                             <li>Spreads and Commissions</li>
                            <li>Range of Markets</li>
                            <li>Trading Hours</li>
                            <li>Funding</li>
                            <li>Withdrawal</li>
                        </ul>
                    </div>
                    <div className='footer-title'>
                        <h4>About IC Markets?</h4>
                        <ul className='no-bullets'>
                            <li>Help Centre</li>
                            <li>Why IC Markets</li>
                            <li>Regulation</li>
                            <li>Legal Documents</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p style={{ marginBottom: '2rem', color: '#ffffff' }}>
                    <strong>IC Markets Global is the trading name of Raw Trading Ltd, which is regulated by the Seychelles Financial
                        Services Authority (FSA) with Securities Dealer’s license number SD018.
                    </strong>
                </p>
                <p>
                    <strong style={{ color: '#ffffff' }}>Risk Warning:</strong> Trading Forex and CFDs carries a high level of risk to your capital and you should only trade
                    with money you can afford to lose. Trading Forex and CFDs may not be suitable for all investors, so please ensure that
                    you fully understand the risks involved and seek independents advice if necessary. Please ensure that you fully understand
                    our <a href="#" className="link-highlight">Risk Disclosure</a>.
                </p>
                <p>
                    <strong style={{ color: '#ffffff' }}>Restricted Countries:</strong> Raw Trading Ltd does not provide services for residents of certain countries such as United
                    States of America, Canada, Israel, New Zealand, Iran and North Korea (Democratic People’s Republic of Korea) or a country
                    where such distribution would be contrary to local law or regulation.
                </p>
                <p>
                    You must be 18 years old, or of legal age as determined in your country. Upon registering an account with Raw Trading Ltd,
                    you acknowledge that you are registering <strong style={{ color: '#ffffff' }}>at your own free will without solicitation on behalf of Raw Trading Ltd</strong>.
                </p>
                <p>
                    Raw Trading Ltd does not direct its website and services to any individual in any country in which the use of its website
                    and services are prohibited by local laws or regulations. When accessing this website from a country in which its use may
                    or may not be prohibited, it is the <strong style={{ color: '#ffffff' }}>user’s responsibility to ensure that any use of the website or services adhere
                        to local laws or regulations</strong>.
                </p>
                <p><strong style={{ color: '#ffffff' }}>Legal Documents</strong></p>

            </div>
            <div className='footer-rights'>
                <p>© 2024 Raw Trading Ltd | All rights reserved.</p>

            </div>

        </footer>
    );
};

export default ICMarketsFooter;
