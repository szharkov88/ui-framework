export function Lot({ lot }) {
  return {
    type: 'article',
    key: lot.id,
    props: {
      className: 'lot',
      children: [
        {
          type: 'div',
          props: {
            className: 'price',
            children: lot.price,
          },
        },
        {
          type: 'h1',
          props: {
            children: lot.name,
          },
        },
        {
          type: 'p',
          props: {
            children: lot.description,
          },
        },
      ],
    },
  };
}
