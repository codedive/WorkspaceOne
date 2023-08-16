const sounds=['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(sound=>{
    const btn=document.createElement('button') //creating a button 
    btn.classList.add('btn') //adding button to node list
    btn.innerText=sound   //now we want to add class of btn for styling and then inner text set inner text to sound so it will have all sounds   as inner text of button
  
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
// so the id we want is going to be that particular sound and then add .play and u can use it an audio element
    })
   
    document.getElementById('buttons').appendChild(btn) // now button will be created
}) 


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}