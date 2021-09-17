import './Logo.css';
import logo from '../../../assets/logo.png';

export const Logo = () => {
  return {
    type: 'img',
    props: {
      className: 'logo',
      src: logo,
    },
  };
};
