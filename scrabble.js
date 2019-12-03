import { getWords } from './asyncmodule.js';

console.log(getWords().then(function (x) {
  return x;
}));