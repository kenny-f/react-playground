import React from 'react';
import Radium from 'radium';
import Line from '../Home/line/Line';
import settings from '../../views/home-settings';

class Services extends React.Component {
  render() {
    return (
      <section style={settings.section} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 style={[settings.sectionHeading]}>At Your Service</h2>
              <Line color="orange"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
                <h3>Sturdy Templates</h3>
                <p className="text-muted">Our templates are updated regularly so they don't break.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>
                <h3>Ready to Ship</h3>
                <p className="text-muted">You can use this theme as is, or you can make changes!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>
                <h3>Up to Date</h3>
                <p className="text-muted">We update dependencies to keep things fresh.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>
                <h3>Made with Love</h3>
                <p className="text-muted">You have to make your websites with love these days!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Radium(Services);
