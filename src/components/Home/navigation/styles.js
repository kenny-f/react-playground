const styles = {
  navbarAffix: {
    backgroundColor: '#fff',
    padding: '40px',
  },

  navbarStyle: {
    borderColor: 'rgba(34,34,34,.05)',
    fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
    backgroundColor: '#fff',
    transition: 'all .35s',

    '@media (minWidth:768px)': {
      borderColor: 'rgba(255,255,255,.3)',
      backgroundColor: 'transparent',
    },
  },
  brand: {
    textTransform: 'uppercase',
    fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
    fontWeight: 700,
    color: '#f05f40',
    ':hover': {
      color: '#eb3812',
    },
    ':focus': {
      color: '#eb3812',
    },

    '@media (minWidth:768px)': {
      color: 'rgba(255,255,255,.7)',
      ':hover': {
        color: '#fff',
      },
      ':focus': {
        color: '#fff',
      },
    },
  },

  navItem: {
    textTransform: 'uppercase',
    fontSize: '13px',
    fontWeight: 700,
    color: '#222',
    ':hover': {
      color: '#f05f40',
    },
    '@media (minWidth:768px)': {
      color: 'rgba(255,255,255,.7)',
      ':hover': {
        color: '#fff',
      },
    },
  },
};

export default styles;
