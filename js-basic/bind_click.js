window.addEventListener('click', () => {
  console.log('click me');
})


setTimeout(() => {
  console.log('after 2s');
  
  window.removeEventListener('click', () => {
    console.log('click me')
  })
}, 2000)