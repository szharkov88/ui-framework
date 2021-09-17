import './Loading.css';

export const Loading = () => {
  return {
    type: 'div',
    props: {
      className: 'loading',
      children: ['Loading...'],
    },
  };
};
