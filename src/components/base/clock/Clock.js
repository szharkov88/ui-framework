import './Clock.css';

export const Clock = ({ time }) => {
  const isDay = time.getHours() >= 7 && time.getHours() <= 21;

  return {
    type: 'div',
    props: {
      className: 'clock',
      children: [
        {
          type: 'span',
          props: {
            className: 'value',
            children: [time.toLocaleString()],
          },
        },
        {
          type: 'span',
          props: {
            className: isDay ? 'icon day' : 'icon night',
          },
        },
      ],
    },
  };
};
