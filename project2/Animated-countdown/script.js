const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach((num) => {
    num.classList.value = '' //clearing value
  })

  nums[0].classList.add('in') //3
}

function runAnimation() {
  nums.forEach((num, idx) => { //nums =nodelist
    const nextToLast = nums.length - 1 // 4-1=3

    //created a event listener to know when animation ends
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {//checking index is not last
       //then take current no ans want to remove the in class
       //amd that going to give in out effet
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
       //we want to see if there is number after bcse we dont wnt to add
       //an in class if there is no net element
        num.nextElementSibling.classList.add('in')
      } else {
        //we r done nd want to show final msg and hide counter
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})