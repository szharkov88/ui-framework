import { Lot } from '../lot/Lot';
import { Loading } from '../loading/Loading';

export function Lots({ lots }) {
  if (!lots) {
    return {
      type: Loading,
      props: {},
    };
  }
  return {
    type: 'div',
    props: {
      className: 'lots',
      children: lots.map((lot) => ({
        type: Lot,
        props: { lot },
      })),
    },
  };
}
