import { renderView } from './framework/render';
import { store } from './store';

store.subscribe(() => {
  renderView(store.getState());
});

renderView(store.getState());
