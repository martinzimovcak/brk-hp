import React from 'react';
import {Link} from "react-router-dom";

const bg = '/content/images/images/banner/bnr1.jpg';

class PageNotFound extends React.Component {
  render() {
    return (
      <>
        <div className="dlab-bnr-inr full-height overlay-black-dark" style={{ backgroundImage: "url(" + bg + ")" }}>
          <div className="container">
            <div className="row max-w700 dlab-bnr-inr-entry dz_error-404-area align-m dz_error-404 text-white m-auto">
              <div className="col-lg-4 col-md-4 m-tb30">
                <div className="bg-primary dz_error">
                  404
                </div>
              </div>
              <div className="col-lg-8 col-md-8 m-b30 text-left">
                <h2 className="error-head">Něco se nepovedlo!</h2>
                <p className="font-16">Omlouváme se, ale stránka, kterou hledáte neexistuje. Na nápravě se pracuje a opava by měla být hotová co nejdříve.</p>
                <p className="font-16">Můžete se vrátit na hlavní stránku kliknutím na tlačítko.</p>
                <Link to="/" className="site-button">Domů</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PageNotFound;
