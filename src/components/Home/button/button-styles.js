import settings from '../../../views/home-settings';

const styles = {
  base: {
    border: 0,
    borderRadius: '300px',
    textTransform: 'uppercase',
    fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
    fontWeight: 700,
    WebkitTransition: 'all .35s',
    MozTransition: 'all .35s',
    transition: 'all .35s',
  },
  default: {
    borderColor: settings.colors.white,
    color: settings.colors.black,
    backgroundColor: settings.colors.white,

  },
  primary: {
    borderColor: settings.colors.orange,
    color: settings.colors.white,
    backgroundColor: settings.colors.orange,
  },
  xl: {
    padding: '15px 30px',
  },
};

export default styles;
