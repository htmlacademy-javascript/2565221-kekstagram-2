const checkStringLength = (string = '', maxLength = 1) => {
  const str = string.length <= maxLength;
  return str;
};
checkStringLength('проверяемая строка', 20);

const checkPalindrome = (string) => {
  string = string.toUpperCase();
  string = string.replaceAll(' ', '');
  let rewrittenString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    rewrittenString = rewrittenString + string[i];
  }
  return string === rewrittenString;
};
checkPalindrome('топот');
