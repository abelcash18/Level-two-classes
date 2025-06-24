function showTable(){
    let show = ""
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let row = document.getElementById("row").value
    for(let i = start; i <= end; i++){
        show += 
        `<td><table><tr><th>${i} times table </th></tr></table><table>`
        for(let j = 1; j <= row; j++){
            console.log(`${i} x ${j} = ${i*j} `)    
            show +=
            `<tr><td>${i} x ${j} = ${i*j}</td></tr>`
        }
        show += `</table></td>`
    }
    document.getElementById("display-table").innerHTML = show
}