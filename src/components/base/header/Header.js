import './Header.css';
import { Logo } from '../logo/Logo';

export const Header = () => {
  return {
    type: 'header',
    props: {
      className: 'header',
      children: [
        {
          type: Logo,
        },
      ],
    },
  };
};
