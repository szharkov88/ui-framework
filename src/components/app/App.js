import './App.css';

import { Header } from '../base/header/Header';
import { Clock } from '../base/clock/Clock';
import { Lots } from '../base/lots/Lots';
import { VDom } from '../../framework/virtual-dom/virtualDom';

export const App = ({ state }) => {
  const { time, lots } = state;
  return VDom.createElement('div', { className: 'app' }, [
    VDom.createElement(Header),
    VDom.createElement(Clock, { time }),
    VDom.createElement(Lots, { lots }),
  ]);
};
