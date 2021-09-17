const initialState = {
  time: new Date(),
  lots: [],
};

export class Store {
  constructor(state) {
    this.state = state;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  getState() {
    return this.state;
  }

  changeState(diff) {
    this.state = {
      ...this.state,
      ...(typeof diff === 'function' ? diff(this.state) : diff),
    };

    this.listeners.forEach((listener) => {
      listener();
    });
  }
}

export const store = new Store(initialState);
