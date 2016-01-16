import React from 'react';
import radium from 'radium';

import LoginForm from './../components/Login/loginForm/LoginForm';
import BackgroundImg from './../components/backgroundImg/BackgroundImg';
import SocialBtn from '../components/socialBtn';
import styles from './login.styles';
const { Style } = radium;

class Home extends React.Component {
  render() {
    return (
			<BackgroundImg>
        <div className="loginPage">
          <Style
            scopeSelector=".loginPage"
            rules={{
            'h1, h3, p': {
              fontFamily: 'Roboto, sans-serif',
            },
          }}
          />

          <div style={styles.innerBg}>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text">
                  <h1 style={styles.h1}>
                    Login Form
                  </h1>
                  <div className="description" style={{ margin: '20px 0 10px 0' }}>
                    <p style={styles.pp}>
                      This is a free responsive login form made with Bootstrap.
                      This is some random text to fill in some more space.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3" style={{ marginTop: '35px' }}>
                  <div style={styles.formTop}>
                    <div style={styles.formTopLeft}>
                      <h3 style={styles.hthreelogintooursite}>
                        Login to our site
                      </h3>
                      <p style={styles.p}>
                        Enter your username and password to log on:
                      </p>
                    </div>
                    <div style={styles.formTopRight}>
                      <i className="fa fa-key"/>
                    </div>
                  </div>
                  <div style={styles.formBottom}>
                    <LoginForm />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-6 col-sm-offset-3"
                  style={{ marginTop: '35px', textAlign: 'center' }}
                >
                  <h3 style={styles.hthree}>
                    ...or login with:
                  </h3>
                  <div style={{ marginTop: '25px' }}>
                    <SocialBtn href="#" type="facebook">
                      Facebook
                    </SocialBtn>
                    <SocialBtn href="#" type="twitter" style={{ background: '#55acee' }}>
                      Twitter
                    </SocialBtn>
                    <SocialBtn href="#" type="google-plus" style={{ background: '#dd4b39' }}>
                      Google Plus
                    </SocialBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </BackgroundImg>
    );
  }
}

export default Home;
