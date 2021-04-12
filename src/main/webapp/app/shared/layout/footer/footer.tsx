import React from 'react';
import { Link } from 'react-router-dom';

const bg = '/content/images/images/background/bg2.png';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top" style={{ backgroundImage: 'url(' + bg + ')', backgroundSize: 'contain' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-6 footer-col-4">
                <div className="widget widget_services border-0">
                  <h5 className="footer-title text-white">Společnost</h5>
                  <ul>
                    <li>
                      <Link to="/about">O nás</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid-2">Blog bude - nebude?</Link>
                    </li>
                    <li>
                      <Link to="/services">Služby</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Projekty </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4">
                <div className="widget widget_services border-0">
                  <h5 className="footer-title text-white">Užitečné odkazy</h5>
                  <ul>
                    <li>
                      <Link to="/contact-1">Kontakt</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/team-1">Tým bude nebude ?</Link>
                    </li>
                    <li>
                      <Link to="/team-1">Rezidence na Hřebenkách ?</Link>
                    </li>
                    <li>
                      <Link to="/team-1">Přezletice ?</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-lg-3 col-sm-6 footer-col-4">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title text-white ">Kontaktujte nás</h5>
                  <ul>
                    <li>
                      <i className="ti-location-pin" />
                      <strong>address</strong>Malé náměstí 142/3, 110 00 Praha 1
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <strong>telefon</strong>+420 608 776 452
                    </li>
                    <li>
                      <i className="ti-email" />
                      <strong>email</strong>brkstavebni@brkstavebni.cz
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-xl-4 col-lg-4 col-sm-6 footer-col-4 ">
                <div className="widget">
                  <h5 className="footer-title text-white">Přihlásit k odběru novinek</h5>
                  <p className="text-capitalize m-b20">Pokud se přihlásíte budeme Vám zasílat novinky a zvýhodněné nabídky.</p>
                  <div className="subscribe-form m-b20">
                    <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                      <div className="dzSubscribeMsg"/>
                      <div className="input-group">
                        <input name="dzEmail" required className="form-control" placeholder="Vaše emailová adresa" type="email" />
                        <span className="input-group-btn">
                          <button name="submit" value="Submit" type="submit" className="site-button btnhover20 radius-xl">
                            Přihlásit
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <ul className="list-inline m-a0">
                    <li>
                      <Link to="#" className="site-button facebook circle ">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="site-button google-plus circle ">
                        <i className="fa fa-google-plus" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="site-button linkedin circle ">
                        <i className="fa fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="site-button instagram circle ">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="site-button twitter circle ">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left ">
                <span>Copyright © 2021 BRK Stavební a.s.</span>
              </div>
              <div className="col-md-6 col-sm-6 text-right ">
                <div className="widget-link ">
                  <ul>
                    <li>
                      <Link to="/about-2"> O nás</Link>
                    </li>
                    <li>
                      <Link to="/about-2"> Vytvořil Ing. Martin Zimovčak</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
