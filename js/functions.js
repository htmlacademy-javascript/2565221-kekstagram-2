const checkStringLength = (string = "", length = 1) => {
  while (string <= length) {
    return true
  }
};
checkStringLength();
console.log("проверяемая строка", 20, checkStringLength("проверяемая строка", 20));
console.log("проверяемая строка", 18, checkStringLength("проверяемая строка", 20));
console.log("проверяемая строка", 10, checkStringLength("проверяемая строка", 20));

const checkPalindrome = (string) => {
  string = string.toUpperCase();
  string = string.replaceAll(" ", "");
  let rewrittenString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rewrittenString += string[i]
  };
  return string === rewrittenString ? "Является палиндромом" : "Не является палиндромом";
}
// Tests palindrome
console.log('\n--- Тесты для palindromeChecker ---');
console.log(
  `Строка является палиндромом: ${checkPalindrome('топот') === true}`
);
console.log(
  `Строка является палиндромом с разным регистром: ${
    checkPalindrome('ДовОд') === true
  }`
);
console.log(
  `Строка не является палиндромом: ${checkPalindrome('Кекс') === false}`
);
console.log(
  `Строка является палиндромом: ${
    checkPalindrome('Лёша на полке клопа нашёл ') === true
  }`
);
