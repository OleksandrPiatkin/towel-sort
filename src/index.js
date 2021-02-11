
module.exports = function towelSort(matrix) {
  let result = [];
  if (typeof matrix !== "undefined" && matrix.length > 0) {
    matrix.forEach( function(element, index) {
      if (index % 2 === 0) {
        element.forEach(item => result.push(item));
      }
      else {
        element.reverse()
              .forEach(item => result.push(item));
      }
    });
  }
  return result;
}
