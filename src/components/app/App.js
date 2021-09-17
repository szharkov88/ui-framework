import './App.css';

import { Header } from '../base/header/Header';
import { Clock } from '../base/clock/Clock';
import { Lots } from '../base/lots/Lots';
import { VDom } from '../../framework/virtual-dom/virtualDom';
import { api, stream } from '../../utils/apiClients';
import { store } from '../../store';

api.get('/lots').then((lotList) => {
  store.changeState({ lots: lotList });

  const onPrice = (data) => {
    store.changeState((prevState) => ({
      lots: prevState.lots.map((lot) => {
        if (lot.id === data.id) {
          return {
            ...lot,
            price: data.price,
          };
        }
        return lot;
      }),
    }));
  };

  store.getState().lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, onPrice);
  });
});

export const App = ({ state }) => {
  const { time, lots } = state;

  return VDom.createElement('div', { className: 'app' }, [
    VDom.createElement(Header),
    VDom.createElement(Clock, { time }),
    VDom.createElement(Lots, { lots }),
  ]);
};
