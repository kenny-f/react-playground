import React from 'react';

import LoginForm from './../components/Login/loginForm/LoginForm';
import BackgroundImg from './../components/backgroundImg/BackgroundImg';


class Home extends React.Component {
  render() {
    return (
			<BackgroundImg>
				<LoginForm />
			</BackgroundImg>
    );
  }
}

export default Home;
