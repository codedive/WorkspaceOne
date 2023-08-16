     const progress = document.getElementById('progress')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    const circles = document.querySelectorAll('.circle')
    
    let currentActive = 1 /* type of index*/
    
    next.addEventListener('click', () => {
        currentActive++
    
        if(currentActive > circles.length) {
            currentActive = circles.length
        }
    
        update()
    })
    
    prev.addEventListener('click', () => {
        currentActive--
    
        if(currentActive < 1) {
            currentActive = 1
        }
    
        update()
    })
    
    function update() {
        circles.forEach((circle, idx) => {  // for each circle ia m checking if index of that circle is less than   current active
            if(idx < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })
         // after thus for each let get all of active circles  bcse once we clixk the active is on ans now on all of these circles active is on all of them
    
        const actives = document.querySelectorAll('.active')
    
         // now we want to handle progress bar bcse we dont want just circle lightininh blue  we want lines to light blue as well
        // -1 will give lower percentage
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    
        if(currentActive === 1) {
            prev.disabled = true
        } else if(currentActive === circles.length) {
            next.disabled = true
        } else {
            prev.disabled = false
            next.disabled = false
        }
    }



