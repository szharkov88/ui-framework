export const VDom = {
  createElement: (type, config, ...children) => {
    const key = config ? config.key || null : null;
    const props = config || {};

    if (children.length === 1) {
      const [one] = children;
      props.children = one;
    } else {
      props.children = children;
    }

    return {
      type,
      key,
      props,
    };
  },
};
