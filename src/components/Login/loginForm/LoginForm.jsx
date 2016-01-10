import React from 'react';
import radium from 'radium';

import SocialBtn from '../../socialBtn';

class LoginForm extends React.Component {
  render() {
    const styles = {
      topContent: {},
      innerBg: {
        padding: '100px 0 170px 0',
      },
      formTop: {
        overflow: 'hidden',
        padding: '0 25px 15px 25px',
        background: '#fff',
        MozBorderRadius: '4px 4px 0 0',
        WebkitBorderRadius: '4px 4px 0 0',
        borderRadius: '4px 4px 0 0',
        textAlign: 'left',
      },
      formTopLeft: {
        float: 'left',
        width: '75%',
        paddingTop: '25px',
      },
      formTopRight: {
        float: 'left',
        width: '25%',
        paddingTop: '5px',
        fontSize: '66px',
        color: '#ddd',
        lineHeight: '100px',
        textAlign: 'right',
      },
      formBottom: {
        padding: '25px 25px 30px 25px',
        background: '#eee',
        MozBorderRadius: '0 0 4px 4px',
        WebkitBorderRadius: '0 0 4px 4px',
        borderRadius: '0 0 4px 4px',
        textAlign: 'left',
      },
      formInput: {
        height: '50px',
        margin: 0,
        padding: '0 20px',
        verticalAlign: 'middle',
        background: '#f8f8f8',
        border: '3px solid #ddd',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '50px',
        color: '#888',
        MozBorderRadius: '4px',
        WebkitBorderRadius: '4px',
        borderRadius: '4px',
        MozBoxShadow: 'none',
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        OTransition: 'all .3s',
        MozTransition: 'all .3s',
        WebkitTransition: 'all .3s',
        MsTransition: 'all .3s',
        transition: 'all .3s',
      },
      btn: {
        width: '100%',
        margin: '0',
        padding: '0 20px',
        verticalAlign: 'middle',
        background: '#4aaf51',
        border: 0,
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '50px',
        color: '#fff',
        MozBorderRadius: '4px',
        WebkitBorderRadius: '4px',
        borderRadius: '4px',
        textShadow: 'none',
        MozBoxShadow: 'none',
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        OTransition: 'all .3s',
        MozTransition: 'all .3s',
        WebkitTransition: 'all .3s',
        MsTransition: 'all .3s',
        transition: 'all .3s',

        ':hover': {
          opacity: 0.6,
          color: '#fff',
        },
      },
    };

    return (
      <div>

        <div style={styles.innerBg}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1
                  style={{ marginTop: '10px', fontSize: '38px', fontFamily: 'Roboto, sans-serif', fontWeight: 100, color: '#fff', lineHeight: '50px', textAlign: 'center' }}>
                  Login Form
                </h1>
                <div className="description" style={{ margin: '20px 0 10px 0' }}>
                  <p
                    style={{ color: '#fff', fontSize: '16px', fontFamily: 'Roboto, sans-serif', lineHeight: '30px', textAlign: 'center', opacity: 0.8 }}>
                    This is a free responsive login form made with Bootstrap. This is some random text to fill in some
                    more space.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3" style={{ marginTop: '35px' }}>
                <div style={styles.formTop}>
                  <div style={styles.formTopLeft}>
                    <h3
                      style={{ marginTop: 0, fontSize: '22px', fontWeight: 300, color: '#555', lineHeight: '30px', fontFamily: 'Roboto, sans-serif' }}>
                      Login to our site</h3>
                    <p
                      style={{ color: '#888', fontSize: '16px', fontWeight: 300, lineHeight: '30px', fontFamily: 'Roboto, sans-serif' }}>
                      Enter your username and password to log on:
                    </p>
                  </div>
                  <div style={styles.formTopRight}>
                    <i className="fa fa-key"/>
                  </div>
                </div>
                <div style={styles.formBottom}>
                  <form role="form" action="" method="post">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-username">Username</label>
                      <input type="text" name="form-username" placeholder="Username..."
                             className="form-control" id="form-username" style={styles.formInput}/>
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-password">Password</label>
                      <input type="password" name="form-password" placeholder="Password..."
                             className="form-control" id="form-password" style={styles.formInput}/>
                    </div>
                    <button type="submit" className="btn" style={styles.btn}>Sign in!</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3" style={{ marginTop: '35px', textAlign: 'center'}}>
                <h3
                  style={{ color: '#fff', fontSize: '22px', fontWeight: 300, fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
                  ...or login with:</h3>
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
    );
  }
}

export default radium(LoginForm);
