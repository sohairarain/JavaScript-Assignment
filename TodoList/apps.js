var arr = []

function userInput(){
    var userData = document.getElementById('user-input')
    arr.push(userData.value+"  RS10")
    userData.value =""
print()
}

function print(){
    var con = document.getElementById('container')
    con.innerHTML=""

 for(var i = 0; i < arr.length; i++){
   
    con.innerHTML +=`<li>${arr[i]}<button onclick="remove(${i})">delete${i}</button></li>`
}
}
function remove(index){
    var delet = arr.splice(index,1)
    console.log(index)
    print()    
}
