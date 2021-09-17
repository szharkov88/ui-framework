import './Loading.css';
import { VDom } from '../../../framework/virtual-dom/virtualDom';

export const Loading = () => {
  return VDom.createElement('div', { className: 'loading' }, 'Loading...');
};
