import { App } from './components/app/App';
import { render } from './framework/render/render';
// eslint-disable-next-line import/no-cycle
import { state as appStore } from './store';

export const renderView = (state) => {
  render(App({ state }), document.getElementById('root'));
};

renderView(appStore);
