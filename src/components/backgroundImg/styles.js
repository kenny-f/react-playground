import './1.jpg';

const styles = {
  base: {
    backgroundImage: 'url(img/1.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // background image is fixed in the viewport so that is doesn't move when the content's height is greater than the image's height
    backgroundSize: 'cover',
    backgroundColor: '#464646',
  },
};

export default styles;
