import { Lot } from '../lot/Lot';
import { Loading } from '../loading/Loading';
import { VDom } from '../../../framework/virtual-dom/virtualDom';

export const Lots = ({ lots }) => {
  if (!lots) {
    return VDom.createElement(Loading);
  }
  return VDom.createElement(
    'div',
    { className: 'lots' },
    lots.map((lot) => VDom.createElement(Lot, { lot }))
  );
};
