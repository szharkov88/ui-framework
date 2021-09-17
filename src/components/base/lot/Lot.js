import './Lot.css';
import { VDom } from '../../../framework/virtual-dom/virtualDom';

export const Lot = ({ lot }) => {
  return VDom.createElement('article', { key: lot.id, className: 'lot' }, [
    VDom.createElement('div', { className: 'article__price' }, lot.price),
    VDom.createElement('h1', { className: 'article__name' }, lot.name),
    VDom.createElement(
      'p',
      { className: 'article__description' },
      lot.description
    ),
  ]);
};
