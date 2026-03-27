var arry = JSON.parse(localStorage.getItem('userArry')) || []


function registerUser(){
    var userName  = document.getElementById('user-name')  
    var userEmail = document.getElementById('user-email') 
    var userPass  = document.getElementById('user-pass')

    if(userEmail.value != "" && userEmail.value != "" && userPass.value != ""){
    
var UserData = {
    Name  : userName.value,
    Email : userEmail.value,
    Pass  : userPass.value ,
}
arry.push(UserData)

localStorage.setItem('userArry',JSON.stringify(arry))

    userName.value = ""
    userEmail.value = ""
    userPass.value = ""
}
}
var data =JSON.parse (localStorage.getItem('userArry'))

function loginUser(){

    var LoginEmail = document.getElementById('login-email')
    var LoginPass = document.getElementById('login-pass')
    var check = false
    
    for(var i = 0 ; i < data.length ; i++){
    
    if(LoginEmail.value == data[i].Email && LoginPass.value == data[i].Pass){

        console.log(data[i])
        alert(` Sir/Madam ${data[i].Name} \n conragtulations  your login successfully `)
        LoginEmail.value =''
        LoginPass.value  =''
        check = true
}}
    if(check == false){ 
        LoginEmail.style.border='1px solid red'
        LoginPass.style.border='1px solid red'
}}


