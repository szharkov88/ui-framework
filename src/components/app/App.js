import './App.css';

import { Header } from '../base/header/Header';
import { Clock } from '../base/clock/Clock';
import { Lots } from '../base/lots/Lots';

export const App = ({ state }) => {
  return {
    type: 'div',
    props: {
      className: 'app',
      children: [
        {
          type: Header,
          props: {},
        },
        {
          type: Clock,
          props: { time: state.time },
        },
        {
          type: Lots,
          props: { lots: state.lots },
        },
      ],
    },
  };
};
