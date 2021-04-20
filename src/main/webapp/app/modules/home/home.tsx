import './home.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderHome from 'app/shared/elements/slider-home';
import { blogContent3, homeSliderContent5 } from 'app/shared/elements/slider-content';
import ReferencesSlider1 from 'app/shared/elements/references-slider1';
import ReferencesSlider2 from 'app/shared/elements/references-slider2';
import Team from 'app/shared/elements/team';
import Testimonial from 'app/shared/elements/testimonial';
import SliderBlog from 'app/shared/elements/slider-blog';
import ScrollToTop from 'app/shared/elements/scroll-to-top';
import Gallery from 'app/shared/elements/gallery';
import Header from 'app/shared/layout/header/header';

// import '/content/images/css/skin/skin-3.min.css';

const bg = '/content/images/images/background/bg11.jpg';
const bg2 = '/content/images/images/background/bg9.jpg';
const bg3 = '/content/images/images/background/map-bg1.png';

const images = [
  {
    id: 1,
    name: 'Plánování',
    icon: 'flaticon-worker',
    title: 'Háje',
    title2: 'Rekonstrukce obchodního centra',
    imgUrl: '/content/images/images/portfolio/construct/image_1.jpg',
  },
  {
    id: 1,
    name: 'Plánování',
    icon: 'flaticon-worker',
    title: 'Háje',
    title2: 'Rekonstrukce obchodního centra',
    imgUrl: '/content/images/images/portfolio/construct/image_2.jpg',
  },
  {
    id: 1,
    name: 'Plánování',
    icon: 'flaticon-worker',
    title: 'Háje',
    title2: 'Rekonstrukce obchodního centra',
    imgUrl: '/content/images/images/portfolio/construct/image_3.jpg',
  },
  {
    id: 1,
    name: 'Plánování',
    icon: 'flaticon-worker',
    title: 'Háje',
    title2: 'Rekonstrukce obchodního centra',
    imgUrl: '/content/images/images/portfolio/construct/image_4.jpg',
  },
  {
    id: 1,
    name: 'Plánování',
    icon: 'flaticon-worker',
    title: 'Háje',
    title2: 'Rekonstrukce obchodního centra',
    imgUrl: '/content/images/images/portfolio/construct/image_5.jpg',
  },
  {
    id: 1,
    name: 'Plánování',
    icon: 'flaticon-worker',
    title: 'Háje',
    title2: 'Rekonstrukce obchodního centra',
    imgUrl: '/content/images/images/portfolio/construct/image_6.jpg',
  },
  {
    id: 2,
    name: 'Výstavba',
    icon: 'flaticon-crane',
    title: 'Byty přezletice',
    imgUrl: '/content/images/images/portfolio/construct/image_2.jpg',
  },
  {
    id: 2,
    name: 'Výstavba',
    icon: 'flaticon-crane',
    title: 'Byty přezletice',
    imgUrl: '/content/images/images/portfolio/construct/image_4.jpg',
  },
  {
    id: 2,
    name: 'Výstavba',
    icon: 'flaticon-crane',
    title: 'Byty přezletice',
    imgUrl: '/content/images/images/portfolio/construct/image_2.jpg',
  },
  {
    id: 3,
    name: 'Konzultace',
    icon: 'flaticon-analytics',
    title: 'Hotel Rott',
    imgUrl: '/content/images/images/portfolio/construct/image_3.jpg',
  },
  {
    id: 3,
    name: 'Konzultace',
    icon: 'flaticon-analytics',
    title: 'Hotel Rott',
    imgUrl: '/content/images/images/portfolio/construct/image_5.jpg',
  },
  {
    id: 4,
    name: 'Mechanizace',
    icon: 'flaticon-optimization',
    title: 'Mošnová',
    imgUrl: '/content/images/images/portfolio/construct/image_4.jpg',
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content bg-white">
        <div>
          <video id="bgvid" className="hide-mobile" playsInline autoPlay loop muted>
            <source src="../../../content/video/bg01.mp4" type="video/mp4" />
            <source src="" type="video/webm" />
            <source src="" type="video/ogv" />
          </video>
          <div className="viewport">
            <h1>Stavíme vaše sny</h1>
            <p>
              Původní video Toto tady si Štěpán doplní................ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="site-button">O NÁS</button>
            <button className="site-button">CO UMÍME</button>
          </div>
        </div>
        <div>
          <video id="bgvid" className="hide-mobile" playsInline autoPlay loop muted>
            <source src="../../../content/video/bg.mov" type="video/mp4" />
            <source src="" type="video/webm" />
            <source src="" type="video/ogv" />
          </video>
          <div className="viewport2">
            <h1>Stavíme vaše sny</h1>
            <p>
              Video ve formátu mp4 Toto tady si Štěpán doplní................ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="site-button">O NÁS</button>
            <button className="site-button">CO UMÍME</button>
          </div>
        </div>
        <div>
          <video id="bgvid" src="../../../content/video/bg.mov" className="hide-mobile" playsInline autoPlay loop muted>
            <source src="" type="video/webm" />
            <source src="" type="video/ogv" />
          </video>
          <div className="viewport3">
            <h1>Stavíme vaše sny</h1>
            <p>
              Video ve formátu mov Toto tady si Štěpán doplní................ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="site-button">O NÁS</button>
            <button className="site-button">CO UMÍME</button>
          </div>
        </div>
        <div className="content-block">
          <div className="section-full content-inner const-about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                  <div className="radius-sm m-b30 img-ho1">
                    <img src={'/content/images/images/about/pic11.jpg'} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
                  <div className="content-bx1">
                    <div className="about-year">
                      <span>13</span>
                      <p>
                        Let
                        <br />
                        Zkušeností
                      </p>
                    </div>
                    <div className="section-head style2">
                      <h2 className="title">
                        Architektura je umění,
                        <br /> a stavby
                      </h2>
                      <p>
                        Štěpán doplní něco smysluplného vata = Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse
                        ullamcorper metus in erat viverra, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.
                        Praesent pharetra orci odio, ut mattis tellus
                      </p>
                    </div>
                    <Link to="/portfolio-details" className="site-button m-r10 m-b10 btnhover20">
                      Zobrazit portfolio
                    </Link>
                    <Link to="/about-1" className="site-button black m-b10 btnhover20">
                      O nás
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-full bg-white content-inner-2 project-slider"
            style={{ backgroundImage: 'url(' + bg + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 p-lr0">
                  <ReferencesSlider1 />
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-content wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                    <div className="section-head style2">
                      <h2 className="title">
                        Náš poslední projekt
                        <br />
                        Rekonstrukce obchodního centra Háje
                      </h2>
                      <p>
                        Zase Štěpán doplní vata = Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper
                        metus in erat viverra, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada{' '}
                      </p>
                    </div>
                    <div className="m-b30">
                      <ul className="list-details">
                        <li>
                          <strong>Klient:</strong>
                          <span>Obchodní centrum Háje???</span>
                        </li>
                        <li>
                          <strong>Dokončení:</strong>
                          <span>11. dubna, 2021</span>
                        </li>
                        <li>
                          <strong>Typ projektu:</strong>
                          <span>Komerční</span>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <Link to="/portfolio-details" className="site-button btnhover20">
                        Zobrazit Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full bg-white content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
            <div className="container">
              <div className="section-head style2 text-center">
                <h2 className="title m-b10">Projekty</h2>
                <p>
                  Štěpán doplní vata = Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </div>
              <div className="row p-l0 sp10">
                <div className="col-lg-12">
                  <Gallery images={images} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-full bg-white content-inner-1 project-area project-style-1  bg-img-fix"
            style={{ backgroundImage: 'url(' + bg2 + ')', backgroundSize: 'cover' }}
          >
            <div className="container">
              <div className="section-head text-white style2 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
                <h2 className="title m-b10">Luxusní rezidence Na Hřebenkách</h2>
                <p>Poslední dva byty k prodeji </p>
                <Link to="/contact-1" className="site-button btnhover20 m-r10 m-b10">
                  Kontaktujte nás
                </Link>
                <Link to="/portfolio-details" className="site-button btnhover20 m-b10">
                  Zobrazit více
                </Link>
              </div>
              <ReferencesSlider2 />
            </div>
          </div>
          <div className="section-full bg-white content-inner-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                  <div className="icon-bx-wraper sr-iconbox style2">
                    <div className="icon-lg m-b10">
                      <Link to="#" className="icon-cell">
                        <i className="flaticon-worker" />
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte">Návrh</h4>
                      <p>Nabízíme kompletní návrh řešení</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                  <div className="icon-bx-wraper sr-iconbox style2">
                    <div className="icon-lg m-b10">
                      <Link to="#" className="icon-cell">
                        <i className="flaticon-factory-1" />
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte">Architektura</h4>
                      <p>Spolupracujeme s renomovanými architekty a projektanty</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                  <div className="icon-bx-wraper sr-iconbox style2">
                    <div className="icon-lg m-b10">
                      <Link to="#" className="icon-cell">
                        <i className="flaticon-design-tools" />
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte">Interiérový design</h4>
                      <p>Disponujeme spřátelenými interiérovými designery</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                  <div className="icon-bx-wraper sr-iconbox style2">
                    <div className="icon-lg m-b10">
                      <Link to="#" className="icon-cell">
                        <i className="flaticon-settings" />
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte">Akreditace</h4>
                      <p>Naši stavbyvedoucí mají akreditaci ČKAIT </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                  <div className="icon-bx-wraper sr-iconbox style2">
                    <div className="icon-lg m-b10">
                      <Link to="#" className="icon-cell">
                        <i className="flaticon-worker" />
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte">Základy</h4>
                      <p>Jádro společnosti tvoří kmenový zaměstnanci </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                  <div className="icon-bx-wraper sr-iconbox style2">
                    <div className="icon-lg m-b10">
                      <Link to="#" className="icon-cell">
                        <i className="flaticon-factory-2" />
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte">Společnost</h4>
                      <p>Společnost je zapsána .... TODO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full bg-gray content-inner">
            <div className="container">
              <div className="section-head style2 text-center">
                <h2 className="title">Náš tým</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
              <Team />
            </div>
          </div>

          <div
            className="section-full content-inner-2 bg-white wow fadeIn"
            style={{ backgroundImage: 'url(' + bg3 + ')' }}
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="container">
              <div className="section-head style2 text-center">
                <h2 className="title">Co o náš říkají klienti</h2>
                <p>13+ let zkušeností</p>
              </div>
              <Testimonial />
            </div>
          </div>

          <div className="section-full content-inner bg-gray wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
            <div className="container">
              <div className="section-head style2 text-center">
                <h2 className="title">Poslední příspěvky v blogu</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>

              <SliderBlog data={blogContent3} imgEffect="zoom" blogPostCls="post-style-2" noDes />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <ScrollToTop className="style2 radius" />
    </>
  );
};
export default Home;
