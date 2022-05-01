// XXXXXXXXXXXXXXXXXXX  ATER  XXXXXXXXXXXXXXXXXXXXXXXX
/*  A         T           E               R
    aula      teoria      exercícios      revisão   */

//    MAP    ////////

/*MAP = quando for preciso obeter um novo array, com a
mesma quantidade do original e seja transformados*/

const numbers = [1, 2, 3];
//  exemplo  numbers.map((price, index, array) => {});
const dobrodenumeros = numbers.map(item => { return item * 2 });
const somadenumeros = numbers.map(item => item + 2);

// Outro exemplo de map
const prices = [20, 30, 50, 15, 255, 7];
const salePrices = prices.map(price => price / 2);

// Outro Exemplo

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const produtos = products.map(product => {
  if (product.price >= 30) {
    return {
      name: product.name,
      price: product.price / 2
    }
  }
  return product;
});

console.log('Map', produtos);