// Q1
// document.write(new Date())
// // Q2
// var month = new Date()
// var arr = ["januray","february","march","april","may","june","july","august","september","october","november","december"]
// alert(arr[month.getMonth()])

// // Q3
// var data = new Date()
// var days =["sunday","monday","tuesday","wednesday","thrusday","friday","saturdat"]
// var result = days[data.getDay()]
// alert(result.slice(0,3))   

// Q4
// var data = new Date()
// var days =["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
// var result = days[data.getDay()]
// if(result == "sunday" || result == "saturday"){
//     alert("Its fun day")
// }

// // Q5
// var date = new Date()
// if(date.getDate()< 16){

//     var days =["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]

// for(i = 0; i < 1; i++){

//     document.write(`<h1>First fifteen days of the month</h1>`);
//     for(j = 0; j <= 15; j++){
//         var result = days[ j % 7]
//         document.write(j+" "+result+'</br>')}
// }}
// else{
//     document.write("Last days of the month");
// }

// Q6
// var today = new Date()
// document.write("Current Dtae"+today +'</br>' )
// document.write("Elapsed milliseconds since january "+today.getTime()+'</br>')
// document.write("Elapsed minutes since january "+today.getTime()/ (1000 * 60)+'</br>')

// Q7
// var today = new Date()
// var i = today.getHours()

// switch(true){

//     case (i < 12):
//          alert("its AM good morning")
//          break;
    
//     default:
//         alert("its pm soo jao")     

    
// }

// // Q8
// var today = new Date()
// var before = new Date("december 31 ,2020")

// document.write(before)

// // Q9
// var today = new Date()
// var before = new Date("feburay 18,2026")
// var calu =  today - before
// var days = calu / (1000 * 60 * 60 * 24) 

// document.write(Math.floor(days)+" days have passed since 1st Ramdan , 2015")

// Q10

// var today = new Date()
// var before = new Date("june 18,2026")
// var calu =  before - today
// var days = calu / (1000) 

// document.write(Math.floor(days)+" milliseconds have passed since 1st Ramdan , 2015")

// Q11
// var today = new Date()
// document.write(today+ '</br>')

// var time = today.getHours()
// today.setHours(-1)

// document.write(today)

// // Q12
// var today = new Date()
// today.setFullYear(today.getFullYear()-100)
// document.write("100 years back"+today)

// // Q13
// var input = prompt("enter your age")
// var today = new Date()
// var age = input

// today.setFullYear(today.getFullYear() - input)
// document.write("Your age is "+ input +'</br>'+ "your  birth year is"+ today.getFullYear())

// // Q14
// var  userInput =prompt("welcome to K-Electric Bill \n  Enter your Name")
// var today = new Date()
// var Units = 28
// var chargers = 10000

// var arr = ["januray","february","march","april","may","june","july","august","september","october","november","december"]

// document.write('<h3>Customer Name</h3>'+userInput.toLocaleUpperCase() + '</br>'+
//                '<h3>Current Month</h3>'+ arr[today.getMonth()] + '</br>'+
//                '<h3>Number of Units</h3>'+ 28 + '</br>'+
//                '<h3>Charges per Unit</h3>'+ 80 + '</br>'+
//                '<h3>Net amount payable (Whithin due date)</h3>'+ 28 * 80 + '</br>'+
//                '<h3>Late payment Charges</h3>'+"$10000"+
//                '<h3>Gross Amount payable (after due date)</h3>' +chargers + Units 
// )

// Q15
// showDate()
// function showDate(){
//     document.write(new Date())
// }

// Q16

// var FirstName = prompt("Enter youre first Name")
// var lastName = prompt("Enter youre Last Name")
// greeting()
// function greeting(){
//     var result = FirstName +" " + lastName
//     document.write(result)
// }

// Q17
                                                         // ????????
// var Num1 = +prompt("Enter first number for sum")
// var Num2 = +prompt("Enter last number for sum")


// function sumofTwoNum(FirstNum ,secondNum) {
// var sum = Num1 + Num2
// return sum;

// }
// var result = sumofTwoNum(Num1 , Num2)
// document.write(result)


// Q19
// var N1 = +prompt("Enter first number for sum")
// var N2 = +prompt("Enter last number for sum")
// var op = prompt ("enter +-*% etc")


// function sumofTwoNum(Num1 ,Num2,oprater) {

// if(oprater == "+"){
//  var sum  =  Num1 + Num2
    
// }
// else if(oprater == "-"){
//  var sum  =  Num1 - Num2
    
// }
// else if(oprater == "%"){
//  var sum  =  Num1 % Num2
    
// }
// else{
//     alert("enter correct value")
// }
// return sum;
// }
// var result = sumofTwoNum(N1 , N2,op)
// document.write(result)


// Q20
// var userInut = prompt ("Enter number for suqare") 
// suqare()
// function suqare(){
//     var result = userInut * userInut
//     document.write(result)
// }


// Q21
                        // ?????????????????????
// var userInut = +prompt ("Enter number for factorial") 
// factorial()
// function factorial(){
//     var result =1
//     for(i = userInut ; i >= 1 ; i--){
//         result = result * i
//     }
//     document.write(result)
// }

// Q22
// var startInput = prompt( "starting counting number enter")
// var endInput = prompt( "end counting number enter")
// counting(startInput,endInput)
// function counting(start,end){
//     for(i = start ; i <= end; i++){
//         document.write(i+'</br>')
//     }
// }

// Q23
// function userInput(){
//     var caluhypotune = document.getElementById('perpendicular')
//     var baseSquare = document.getElementById('base')
//     var lastAdd = baseSquare.value * baseSquare.value + caluhypotune.value * caluhypotune.value
//     caluhypotune.value=''
//     baseSquare.value=''
//     sum(lastAdd)
//     function sum(suqare){
        
//         var result = Math.sqrt(suqare)
//         document.write(result)
//     }
// }

// Q24


// angle(10,20)

// function angle( num1 , num2) {

// var w = num1    
// var h = num2
// console.log(h * w)
// }

// Q25

// var userInput =prompt("enter words")
// var wordsCheck =""
// for(i = userInput.length -1 ;i >= 0 ; i--){
    
//    wordsCheck += userInput[i]
// }
// if(wordsCheck === userInput){
//     document.write("this is palindrome")
// }
// else{
//     document.write("Not palindrome")
// }

// Q26

// var text = "the quick brown fox"
// var cutWords = text.split(" ")
// for(i = 0 ; i < cutWords.length ; i++ ){
//     var words =cutWords[i].slice(0,1)
//     var caseChange = words.toLocaleUpperCase() 
//     console.log(caseChange + cutWords[i].slice(1))
//     // console.log(caseChange)
// // }
// Q26

// checkbigNum()
// function checkbigNum(){
// var letter = "sohair ali muneeb"
// var text = letter.split(" ")

// var champion =''
// for(i = 0 ; i < text.length ; i++){

//     if(text[i].length > champion.length){
//     champion = text[i]
// }}
// console.log(champion.length)
// }

// Q27
// function show(){
//     var data = document.getElementById('string')
//     var userInput = data.value
//     var letter = document.getElementById('latter')
//     var latterInput = letter.value
    
//     var result = ''
//     for(i = 0 ; i < userInput.length ; i++){
        
//         if(userInput[i] == latterInput){
//             result ++   
//             console.log(result)
//         }
//     }
// }

function find(){
    var data = document.getElementById('string')
    var userInput = data.value
    var letterFind = document.getElementById('Find')
    var FindInput = letterFind.value

    var words = userInput.split(' ')
    
    for(i = 0 ; i < words.length ; i++){

        if(words[i] == FindInput){
            alert("ogggggggggggggggg")
        }

    }
}





// var arr =[]

// function userData(){
//     var userInput = document.getElementById('user-input')
//     arr.push(userInput.value)
//     userInput.value=''
// showTodo()    
// }

// function showTodo(){

//     var list = document.getElementById('container')
//     var con =""
//     for( i = 0; i < arr.length ; i++){
//         con += `<li>${arr[i]}<button onclick="remove(${i})"> delete${i} </button></li>`
// }

//     list.innerHTML=con
//     list.style.textTransform='capitalize'

// }

// function remove(index){
//     console.log(arr[index])
// arr.splice(index, 1)

// showTodo()
// }



