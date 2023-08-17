const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  /*it is the default three div with class key*/
  insert.innerHTML = `
  <div class="key">  
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})