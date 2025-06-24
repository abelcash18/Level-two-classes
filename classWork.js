function showLyrics(){
    let show = ""
    for(i = 99; i >= 0; i--){
       if(i > 0){
        document.getElementById("display").innerHTML += `
        <p>${[i]} bottles of beer on the wall, ${[i]} bottles of beer<br>
        Take one down and pass it around, ${[i-1]} bottles of beer on the wall</p> `
       }
       else{
        document.getElementById("display").innerHTML += `
        <p>No more bottles of beer on the wall, no more bottles of beer<br> 
        Go to the store and buy some more, 99 bottles of beer on the wall</p> `
       }
    }
}