// https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/

var numWays = function (words, target) {
  const targetLength = target.length;
  if (!targetLength) return 0;

  const wordsLength = words.length,
    firstWordLength = words[0].length,
    modulo = 10 ** 9 + 7,
    charCodeOfA = 'a'.charCodeAt(0),
    dp = Array(targetLength).fill(0);

  for (let i = 0; i < firstWordLength; i++) {
    const freq = Array(26).fill(0);

    for (let j = 0; j < wordsLength; j++) {
      freq[words[j].charCodeAt(i) - charCodeOfA]++;
    }

    for (let j = Math.min(i, targetLength - 1); j >= 0; j--) {
      const charCode = target.charCodeAt(j) - charCodeOfA;
      if (freq[charCode] > 0) {
        dp[j] += (j === 0 ? freq[charCode] : dp[j - 1] * freq[charCode]);
        dp[j] %= modulo;
      }
    }
  }

  return dp[targetLength - 1];
};

/* Этот код определяет количество способов, которыми можно образовать подстроки целевой строки (target) из заданного массива слов (words). 

Переменная numWays является функцией, которая принимает два аргумента: words и target.

В начале функции определены основные параметры для работы алгоритма: 

целевая длина строки (targetLength)
количество слов в массиве (wordsLength)
длина первого слова в массиве (firstWordLength)
константа модуля (modulo), используемого при вычислении
код символа 'a' (charCodeOfA)
массив dp, который будет заполняться значениями в процессе работы алгоритма

Затем используется цикл for для итерации по символам в первом слове массива. 

Далее создается новый массив freq для подсчета частоты символов в words. Поэтому производится итерация по wordsLength, и каждый символ переносится в новый массив "freq". 

Затем используются еще два for-цикла для перебора символов внутри целевой строки на каждой итерации с помощью переменной j. Аналогично, получается код символа в целевой строке, который затем соответствует частоте символа в массиве words.

Если частота символа больше нуля, то происходит увеличение значения на dp[j], которое соответствует количеству способов, которыми можно получить подстроки целевой строки. 

Функция возвращает значение, сохраненное в dp[targetLength - 1], что является конечным результатом. */