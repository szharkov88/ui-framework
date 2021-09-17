import './Header.css';
import { Logo } from '../logo/Logo';

export function Header() {
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
}
