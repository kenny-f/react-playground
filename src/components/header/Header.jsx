import React from 'react';
import radium from 'radium';

import Button from '../Home/button/Button';
import Line from '../Home/line/Line';
import styles from './header-styles';

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerContentInner}>
            <h1 style={styles.headerTitle}>Your Favorite Source of Free Bootstrap Themes</h1>
            <Line/>
            <p style={styles.headerParagraph}>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just
              download your template and start going, no strings attached!</p>
            {/* <a href="#about" className="page-scroll" styleName="btn">Find Out More</a> */}
            <Button kind="primary">Find Out More</Button>
          </div>
        </div>
      </header>
    );
  }
}

export default radium(Header);
