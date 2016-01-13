import React from 'react';
import radium from 'radium';
import Button from '../Home/button/Button';
import Line from '../Home/line/Line';

import styles from './about-styles';

class About extends React.Component {
  render() {
    return (
      <section style={[styles.orange, styles.section]} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading" style={styles.sectionHeading}>
                We've got what you need!
              </h2>
              <Line color="white"/>
                <p style={styles.textFaded}>
                  Start Bootstrap has everything you need to get your new website up and running in
                  no time!
                  All of the templates and themes on Start Bootstrap are open source,
                  free to download, and easy to use. No strings attached!
                </p>
                <Button className="btn btn-default btn-xl" kind="default">Get Started!</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default radium(About);
