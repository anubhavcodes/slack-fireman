export default (() => {
  let store = {};
  return {
    set(key, value) {
      store[key] = value;
    },
    get(key) {
      return store[key];
    },
    clear() {
      store = {};
    },
  };
})();
