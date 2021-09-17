import './Clock.css';
import { VDom } from '../../../framework/virtual-dom/virtualDom';
import { store } from '../../../store';

export const Clock = ({ time }) => {
  setInterval(() => {
    store.changeState({ time: new Date() });
  }, 1000);

  const isDay = time.getHours() >= 7 && time.getHours() <= 21;

  return VDom.createElement('div', { className: 'clock' }, [
    VDom.createElement(
      'span',
      { className: 'clock__value' },
      time.toLocaleString()
    ),
    VDom.createElement('span', {
      className: isDay ? 'icon day' : 'icon night',
    }),
  ]);
};
