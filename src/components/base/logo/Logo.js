import logo from '../../../assets/logo.png';

export function Logo() {
  return {
    type: 'img',
    props: {
      className: 'logo',
      src: logo,
    },
  };
}
