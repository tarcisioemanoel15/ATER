// /////////////  REDUCE ////////////

/*REDUCE = quando quiser reduzir o array horiginal a um valor*/

const numeros = [1, 2, 3];
const numerosReduz = numeros.reduce((accumulator, item) => { return accumulator + item }, 0)

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const totalScores = phaseScores.reduce((accumulator, item) => {
  if (item.name === 'Roger Melo') {
    return accumulator + item.score;
  }

  return accumulator;
}, 0)

console.log('reduce', totalScores);