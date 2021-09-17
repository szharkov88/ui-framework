export function createRealNodeByVirtual(virtual) {
  if (typeof virtual !== 'object') {
    return document.createTextNode('');
  }
  return document.createElement(virtual.type);
}
