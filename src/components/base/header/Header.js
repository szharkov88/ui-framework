import './Header.css';
import { Logo } from '../logo/Logo';
import { VDom } from '../../../framework/virtual-dom/virtualDom';

export const Header = () => {
  return VDom.createElement(
    'header',
    { className: 'header' },
    VDom.createElement(Logo)
  );
};
