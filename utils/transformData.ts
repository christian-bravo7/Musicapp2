import { mapKeys } from 'lodash';
import { Dictionary } from '@/utils/models';

export default class TransformData {
  data: Dictionary;

  constructor (data: Dictionary) {
    this.data = data;
  }

  toCamelCase (separator: string) {
    return mapKeys(this.data, (value: any, key: string) => {
      const lowerCaseKey = key.toLowerCase();
      const wordsInKey = lowerCaseKey.split(separator);
      return wordsInKey.length ? convertToCamelCase(wordsInKey) : key;
    });
  }
}

function convertToCamelCase (words: string[]) {
  const convertedWords = [];
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (index === 0) {
      convertedWords.push(word);
    } else {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      convertedWords.push(capitalizedWord);
    }
  }
  return convertedWords.join('');
}
