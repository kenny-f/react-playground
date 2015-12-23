import headerBackground from './header.jpg';

const styles = {
  header: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    backgroundImage: 'url("img/header.jpg")',
    backgroundPosition: 'center',
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'OBackgroundSize': 'cover',

    '@media (min-width:768px)': {
      'minHeight': '100vh',
    },
  },
  headerContent: {
    position: 'relative',
    width: '100%',
    padding: '100px 15px',
    textAlign: 'center',

    '@media (min-width:768px)': {
      position: 'absolute',
      top: '50%',
      padding: '0 50px',
      WebkitTransform: 'translateY(-50%)',
      MsTransform: 'translateY(-50%)',
      transform: 'translateY(-50%)',
    },
  },
  headerContentInner: {
    '@media (min-width:768px)': {
      position: 'absolute',
      top: '50%',
      padding: '0 50px',
      WebkitTransform: 'translateY(-50%)',
      MsTransform: 'translateY(-50%)',
      transform: 'translateY(-50%)',
    },
  },
  headerTitle: {
    marginTop: 0,
    marginBottom: 0,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  headerSeparator: {
    margin: '30px auto',
  },
  headerParagraph: {
    marginBottom: '50px',
    fontSize: '16px',
    fontWeight: 300,
    color: 'rgba(255,255,255,.7)',

    '@media (min-width:768px)': {
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '80%',
      fontSize: '18px',
    },
  },
};

module.exports = styles;
