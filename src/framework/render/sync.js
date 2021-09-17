import { createRealNodeByVirtual } from './createRealNodeByVirtual';

// eslint-disable-next-line sonarjs/cognitive-complexity
export function sync(virtualNode, realNode) {
  if (virtualNode.props) {
    Object.entries(virtualNode.props).forEach(([name, value]) => {
      if (name === 'children' && name === 'key') {
        return;
      }
      if (realNode[name] !== value) {
        // eslint-disable-next-line no-param-reassign
        realNode[name] = value;
      }
    });
  }
  if (virtualNode.key) {
    // eslint-disable-next-line no-param-reassign
    realNode.dataset.key = virtualNode.key;
  }
  if (typeof virtualNode !== 'object' && virtualNode !== realNode.nodeValue) {
    // eslint-disable-next-line no-param-reassign
    realNode.nodeValue = virtualNode;
  }

  const virtualChildren = virtualNode.props
    ? virtualNode.props.children || []
    : [];
  const realChildren = realNode.childNodes;

  for (let i = 0; i < virtualChildren.length || i < realChildren.length; i++) {
    const virtual = virtualChildren[i];
    const real = realChildren[i];

    if (virtual === undefined && real !== undefined) {
      realNode.remove(real);
    }

    if (
      virtual !== undefined &&
      real !== undefined &&
      (virtual.type || '') === (real.tagName || '').toLowerCase()
    ) {
      sync(virtual, real);
    }

    if (
      virtual !== undefined &&
      real !== undefined &&
      (virtual.type || '') !== (real.tagName || '').toLowerCase()
    ) {
      const newReal = createRealNodeByVirtual(virtual);
      sync(virtual, newReal);
      realNode.replaceChild(newReal, real);
    }

    if (virtual !== undefined && real === undefined) {
      const newReal = createRealNodeByVirtual(virtual);
      sync(virtual, newReal);
      realNode.appendChild(newReal);
    }
  }
}
