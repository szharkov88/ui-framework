export const api = {
  get(url) {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (url) {
      case '/lots':
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: 1,
                name: 'Apple',
                description: 'Apple description',
                price: 16,
              },
              {
                id: 2,
                name: 'Orange',
                description: 'Orange description',
                price: 22,
              },
            ]);
          }, 1000);
        });
      default:
        throw new Error('Unknown address');
    }
  },
};

export const stream = {
  subscribe(channel, listener) {
    const match = /price-(\d+)/.exec(channel);
    if (match) {
      setInterval(() => {
        listener({
          id: parseInt(match[1], 10),
          price: Math.round(Math.random() * 10 + 30),
        });
      }, 400);
    }
  },
};
