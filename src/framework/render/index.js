import { evaluate } from './evaluate';
import { sync } from './sync';
import { App } from '../../components/app/App';

const render = (virtualDom, realDomRoot) => {
  const evaluatedVirtualDom = evaluate(virtualDom);

  const virtualDomRoot = {
    type: realDomRoot.tagName.toLowerCase(),
    props: {
      id: realDomRoot.id,
      ...realDomRoot.attributes,
      children: [evaluatedVirtualDom],
    },
  };

  sync(virtualDomRoot, realDomRoot);
};

export const renderView = (state) => {
  render(App({ state }), document.getElementById('root'));
};
