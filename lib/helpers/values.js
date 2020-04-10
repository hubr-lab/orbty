module.exports.isOnlyNumber = (text) => {
  return /^\d+$/.test(String(text));
};