const multiply = (arr) => {
  return arr.reduce((number, total) => total*= number);
};

module.exports = multiply;