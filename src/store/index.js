import { api, stream } from '../utils/apiClients';
// eslint-disable-next-line import/no-cycle
import { renderView } from '../index';

// eslint-disable-next-line import/no-mutable-exports
export let state = {
  time: new Date(),
  lots: null,
};

api.get('/lots').then((lots) => {
  state = {
    ...state,
    lots,
  };
  renderView(state);

  const onPrice = (data) => {
    state = {
      ...state,
      lots: state.lots.map((lot) => {
        if (lot.id === data.id) {
          return {
            ...lot,
            price: data.price,
          };
        }
        return lot;
      }),
    };
    return renderView(state);
  };

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, onPrice);
  });
});

setInterval(() => {
  state = {
    ...state,
    time: new Date(),
  };

  renderView(state);
}, 1000);
