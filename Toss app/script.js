const h3 = document.querySelector("#result")
const img = document.querySelector("#img")


function toss(selected){
    const randomNumber = Math.floor(Math.random() * 2);
    if((selected === 'chand' && randomNumber === 1)||(selected === 'masjid' && randomNumber === 0)){
        console.log(selected);
        console.log(randomNumber);
        console.log(" you won the toss")
        
}
else{
    console.log("You loss the toss")
}

if(randomNumber === 1){
    img.innerHTML= img.src = "https://i.ebayimg.com/images/g/7gcAAOSw6A1hoOxs/s-l400.jpg"
     h3.textContent="You win the toss";
}
else{
    img.innerHTML= img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KdMLgX-lauuVbHOGQyigliIA_hDvat1H1Tr7biKaGg&s"
     h3.textContent="You loss the toss";
}
}
