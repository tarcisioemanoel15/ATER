//   /////// Filter ////////

/*FILTER = quado for preciso criar um novo objeto, 
com a quantidade menor que a horiginal*/

const randunNunbers = [36, 99, 37, 63];

const numerosmaiorQ37 = randunNunbers.filter(item => item > 37);


const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]


const premiumUser = users.filter(user => user.premium)
console.log('Filter', premiumUser)