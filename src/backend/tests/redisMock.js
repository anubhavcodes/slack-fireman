export default (() => {
  let store = {};
  return {
    set(key, value) {
      store[key] = value;
    },
    getAsync(key) {
      return new Promise((resolve, reject) => {
        if (key in store) {
          resolve(store[key]);
        }
        reject(Error('Not found'));
      });
    },
    clear() {
      store = {};
    },
  };
})();
