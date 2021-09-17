import './Logo.css';
import logo from '../../../assets/logo.png';
import { VDom } from '../../../framework/virtual-dom/virtualDom';

export const Logo = () => {
  return VDom.createElement('img', { className: 'logo', src: logo });
};
