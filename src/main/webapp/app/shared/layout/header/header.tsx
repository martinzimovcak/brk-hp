import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Sticky from 'react-stickynode';


const Header = () => {
  useEffect(() => {
    const btn = document.querySelector('.navicon');
    const nav = document.querySelector('.header-nav');
    const navUl = [].slice.call(document.querySelectorAll('.header-nav > ul > li'));

    // sidebar open/close

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener('click', toggleFunc);

    // Sidenav li open close
    for (let y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener('click', function () {
        checkLi(this)
      });
    }

    function checkLi(current) {
      const active = current.classList.contains("open")
      navUl.forEach(el => el.classList.remove('open'));
      // current.classList.add('open');

      if (active) {
        current.classList.remove('open')
      } else {
        current.classList.add('open');
      }
    }
  });

  return (
    <>
      <header className="site-header mo-left header-transparent box-header header">
        <div className="top-bar text-black">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="dlab-topbar-left">
                <ul>
                  <li><Link to="/about-1">O nás</Link></li>
                </ul>
              </div>
              <div className="dlab-topbar-right topbar-social">
                <ul>
                  <li><Link to="/#" className="site-button-link facebook hover"><i className="fa fa-facebook"/></Link>
                  </li>
                  <li><Link to="/#" className="site-button-link google-plus hover"><i
                    className="fa fa-google-plus"/></Link>
                  </li>
                  <li><Link to="/#" className="site-button-link twitter hover"><i className="fa fa-twitter"/></Link>
                  </li>
                  <li><Link to="/#" className="site-button-link instagram hover"><i className="fa fa-instagram"/></Link>
                  </li>
                  <li><Link to="/#" className="site-button-link linkedin hover"><i className="fa fa-linkedin"/></Link>
                  </li>
                  <li><Link to="/#" className="site-button-link youtube hover"><i
                    className="fa fa-youtube-play"/></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Sticky innerZ={999} enabled={true}>
          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix ">
              <div className="container clearfix">
                <div className="logo-header mostion">
                  <Link to="/"><img src='/content/images/logo-main.svg' alt=""/></Link>
                </div>

                <button className="navbar-toggler collapsed navicon justify-content-end" type="button"
                        data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span/>
                  <span/>
                  <span/>
                </button>

                <div className="extra-nav">
                  <Link to="/contact-1" className="site-button radius-no">ZÍSKEJTE NABÍDKU</Link>
                </div>

                <div className="dlab-quik-search ">
                  <form action="#">
                    <input name="search" value="" type="text" className="form-control" placeholder="Type to search"/>
                    <span id="quik-search-remove"><i className="ti-close"/></span>
                  </form>
                </div>

                <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                  <div className="logo-header d-md-block d-lg-none">
                    <Link to="/"><img src='/content/images/logo-main.svg' alt=""/></Link>
                  </div>
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="#">Reference<i className="fa fa-chevron-down"/></Link>
                      <ul className="sub-menu">
                        <li><Link to="/shop">Rezidence na Hřebenkách</Link></li>
                        <li><Link to="/shop">Rekonstrukce České advokátní komory</Link></li>
                        <li><Link to="/shop-sidebar">Obchodní centrum Chodov</Link></li>
                        <li><Link to="/shop-product-details">Byty přezletice</Link></li>
                      </ul>
                    </li>
                    <li className="has-mega-menu">
                      <Link to={'#'}>Blog<i className="fa fa-chevron-down"/></Link>
                      <ul className="mega-menu">
                        <li><Link to={'#'}>Blog</Link>
                          <ul>
                            <li><Link to={'/blog-half-img'}>Jak vybrat dodavatele</Link></li>
                            <li><Link to={'/blog-half-img-sidebar'}>Jak vybrat dodavatele</Link></li>
                            <li><Link to={'/blog-half-img-left-sidebar'}>Jak vybrat dodavatele</Link></li>
                            <li><Link to={'/blog-large-img'}>Jak vybrat dodavatele</Link></li>
                          </ul>
                        </li>
                        <li><Link to={'#'}>Blog</Link>
                          <ul>
                            <li><Link to={'blog-large-img-sidebar'}>Jak vybrat dodavatele</Link></li>
                            <li><Link to={'blog-large-img-left-sidebar'}>Jak vybrat dodavatele</Link></li>
                            <li><Link to={'blog-grid-2'}>Jak vybrat dodavatele</Link></li>
                            <li><Link to={'blog-grid-2-sidebar'}>Jak vybrat dodavatele</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact-1">Kontaktujte nás</Link>
                    </li>
                  </ul>
                  <div className="dlab-social-icon">
                    <ul>
                      <li><Link className="site-button facebook circle-sm outline fa fa-facebook"
                                to="/javascript:void(0);"/></li>
                      <li><Link className="site-button twitter circle-sm outline fa fa-twitter"
                                to="/javascript:void(0);"/></li>
                      <li><Link className="site-button linkedin circle-sm outline fa fa-linkedin"
                                to="/javascript:void(0);"/></li>
                      <li><Link className="site-button instagram circle-sm outline fa fa-instagram"
                                to="/javascript:void(0);"/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sticky>
      </header>
    </>
  )
}

export default Header;
