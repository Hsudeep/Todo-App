const getLocalData = (key) => {
  if (key) {
    let data = localStorage.getItem(key);
    return data;
  }
};

const setLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

export { getLocalData, setLocalData };
