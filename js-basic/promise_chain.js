Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('Error!') })
  .catch(() => 3)
  .then(x => x + 1)
  .then(x => console.log(x));
