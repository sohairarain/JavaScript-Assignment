// QUESTION 1
// var fruits =["apple","mango","strawberry","pineapple","watermanel"] 

// QUESTION 2
// for(c = 1; c <= 10 ; c++){
//     document.write(c+"<br>")
// }

// QUESTION 3
// var Finput = +prompt("Table number")
// var TLength = +prompt("Enter Table length") 

// for(i = 1; i <= TLength; i++){

//     var result = Finput +"x"+ i + "=" + Finput * i 
//     document.write(result+"<br>")
// }

// QUESTION 4
// var fruits =["apple","mango","strawberry","pineapple","watermanel"] 

// for(i = 0; i <= fruits.length; i++){
//     document.write( "<br>"+ i + fruits[i])
// }

// QUESTION 5
// for(c = 1; c <= 10 ; c++){
//     document.write(c+"<br>")
// }

// for(c = 10; c >=1  ; c--){
//     document.write(c +"<br>")
// }
// 0,2,4
// for(j = 0; j <= 20;j=j+2){
//     console.log(j)
// }

// 1,3,5
// for(i = 0 ; i <= 20;i++ ){
//     console.log(i = i+1)
// }

// QUESTION 6

// var userInput = prompt("Ap ko kya chahiye \n bisket \n cake \n chocolete \n cream" ) 
// var BakeryList =["cake","bisket","cream","egg","milk","icecream"]    


// var index = BakeryList.indexOf(userInput.toLowerCase())

// if(index != -1){
//     alert(userInput+" is avaibale at index "+ index + "  in our bakery" )
// }
// else{
//     alert("sorry "+ userInput +" is not avaiale in our bakery")
// }

// QUESTION 7

// var NumList = [10,22,33,50,80,99]

// var max = NumList[0]

// for(i = 0; i < NumList.length ; i++){
//     if(NumList[i] > max){
//         max = NumList[i]
//     }
// }
// alert(max +" This number is bigest num in array")

// var small = [10,23,54,15,8,12]
// var king = small[0]
// for(s = 0 ; s < small.length; s++){
//     if(small[s] < king){ 
//         king = small[s]
//     }
// }

// alert(king+" This number is smallest num in array")

// QUESTION 8

// for(i = 5 ; i <= 100 ; i=i+5){
//     document.write(i +"<br>")
// }

// QUESTION 9

// var firstName = prompt("Enter youre Name")
// var LastName = prompt("Enter youre Last Name")

// var result = firstName + " " + LastName
// console.log(result) 

// var userMobile = prompt("Youre Favorite Mobile phone Modle")

// alert(userMobile.length+ " Is length of string")

// QUESTION 10
// var input = prompt("enter your text to check","Pakistan") 
// var checkInput = prompt("how to check index of cherecter")

// var result =input.lastIndexOf(checkInput)

// console.log(result)
// output is "6" pakistan of last "a"=index "6"

// var input = prompt("enter your text to check","Pakistan") 
// var checkInput = prompt("how to check index of cherecter")

// var result =input.lastIndexOf(checkInput)

// console.log(result)


// for(i = 0; i < input.length ; i++){

//     if(input.toLowerCase()[i] == checkInput.toLowerCase()){
//         alert(i)
//     }
// }

// QUESTION 11


// var input = prompt("enter your text to check","Pakistan") 
// var checkInput = prompt("how to check indexnumber to Character ")

// var result = input.charAt(checkInput)

// alert(result)


// var text = prompt("Enter youre text for last index")
// var compreText = prompt("Enter letter to check last index")

// var result = text.lastIndexOf(compreText)

// document.write(result + " "+"<br>"+ compreText )
         
// var text = prompt("Enter youre text for last index")
// var compreText = prompt("Enter letter to check last index")

// var result = text.charAt(compreText)

// document.write(compreText + " "+"<br>"+ result )
         
// QUESTION 12

// var city = "hyderabad"
// var result = city.replace("hyder","islam")

// document.write( result )

// QUESTION 13

// var message = "Ali and Sami are best friends, They play circket and football together"
// var result = message.replaceAll("and","&")

// document.write( result )

// QUESTION 14

// var StringNum = prompt("Enter Number") 
// if(StringNum > ""){
//     // alert()
    
// if(StringNum >=! 0 ){
//     alert("value : "+StringNum+ "\n" + "Type : "+ "string")
// }
// }

// QUESTION 15
// var userInput = prompt("how to convert text for uppercase","peanuts")
// var converter = userInput.toUpperCase(userInput)

// console.log(converter)

// QUESTION 16

// var userInput = prompt("can you play IQ game ok Enter text and note changes ")
// // javascript
// var copy = userInput.slice(0,1)
// copy = copy.toUpperCase(copy) 
// var result =copy + userInput.slice(1,)
 
// console.log(result)

// var num = 35.39

// var numTostring = num.toString()

// var dotRemove = numTostring.replace(".","")

// document.write( "Number : " + numTostring +"<br>") 
// document.write("Result : " + dotRemove+"<br>")

// QUESTION 17
// apna falsafa 
// var userInput = prompt("enter valid user name in 6 cherater \n must use special cherater @#$ etc..")

// for(i = 0; i <= userInput.length; i++){

//     var check = userInput.indexOf("@")
//     var checks = userInput.indexOf(".")
//     var checko = userInput.indexOf(",")
//     var checkx = userInput.indexOf("!")

//     var index = userInput.charAt(check)
//     var indexs = userInput.charAt(checks)
//     var indexo = userInput.charAt(checko)
//     var indexx = userInput.charAt(checkx)

//     console.log(index)
//     if( userInput[i] == index ){
//         alert("enter a valid username ")
//     }
//     else if( userInput[i] == indexs ){
//         alert("enter a valid username ")
//     }
//     else if( userInput[i] == indexo ){
//         alert("enter a valid username ")
//     }
//     else if( userInput[i] == indexx ){
//         alert("enter a valid username ")
//     }
// }
// book say related

// QUESTION 18

// var userInput = prompt("enter username")
//  for(i = 0 ; i <= userInput.length; i++){
//     var check = userInput.charCodeAt(i)

//     if(userInput[i] == "@" ||userInput[i] == "."||userInput[i] == "," ||userInput[i] == "!"){
//         alert("please enter a vaild  username")  
//     }
//  }


// QUESTION 19
// var list = ["cake","apple pie","cookie","icecream","sweets"]
// var userInput = prompt("welcome to BS bakery . what do you want to oder")

// for(i = 0 ; i <= list.length ; i++){
//     if(list[i] == userInput ){
//         alert(userInput + " are available at index " + userInput.indexOf(userInput) +" in our bakery")
//     }
//     else{
//         alert("we are sorry "+userInput + " is not available in our bakery") 
//         break;
// }
// }

// //QUESTION 20
// var password = prompt("enter a valid password for character code of a-z,A-Z & 0-9 \n example Ali123")

// if(password.length < 6 ){
//     alert("invild password")
// }
// else if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57){
// alert("password should not start with a number ")
// }

// var alpha = false
// var capitalCase =false
// var num  =false    
// for(i = 0 ; i <password.length ; i++){
//     var code = password.charCodeAt(i)
// // A-Z 
// if(code >= 65 && code <= 90 ){
// alpha = true
// }
// // a-z
// else if(code >= 97 && code <= 122){
//     capitalCase = true
// }
// else if(code >= 48 && code <= 57){
//     num = true
// }

// }

// if(alpha && num && capitalCase){
//     alert("password is valid ")
// }
// else{
// alert("Password must contain both alphabets and numbers")
// }

// QUESTION 21

// var uni = "university of karachi"

// var arr = uni.split("")
// for(u = 0 ; u < arr.length ; u++){
    
//     document.write(arr[u]+ "<br>")
// }

// QUESTION 22

// var input = prompt("enter your text to check last character")

// var copy = input.slice(-1)
// document.write(copy)

// QUESTION 23

// var text = "the quick brown fox jumps over the lazy dog. the dog stayed in the house."

// var lower = text.toLowerCase()
// for( i = 0; i <= lower.length ; i++ ){
    
//     if(lower.slice(i,i+3) == "the"){
    
//         console.log(lower) 
//     }

// }

// // QUESTION 23
// var userNum = prompt ("enter number","3.45214")

// var num = "number :"+userNum
// var rou = "round of value  :"+ Math.round(userNum)
// var see = "ceil of value  :"+Math.ceil(userNum)
// var floo ="floor of value  :"+ Math.floor(userNum)

// document.write( num +"<br>"+ rou +"<br>"+ see +"<br>"+ floo)

// // QUESTION 24

// var userNum = prompt ("enter number","2.673")

// var num = "number :"+-userNum
// var rou = "round of value  :"+ Math.round(-userNum)
// var see = "ceil of value  :"+Math.ceil(-userNum)
// var floo ="floor of value  :"+ Math.floor(-userNum)

// document.write( num +"<br>"+ rou +"<br>"+ see +"<br>"+ floo)

// // QUESTION 25
// var userInput = prompt("enter number to find absolute value","-5")

// var num = Math.abs(userInput)

// document.write("the absolute  value is "+num)

// // QUESTION 25 
// var num = Math.random()
// var num_ = num * 6 + 1
// var $num = Math.floor(num_)

// document.write($num)

// QUESTION 26 ??????

// QUESTION 27
// var num = Math.random()
// var num_ = num * 100 + 1
// var $num = Math.floor(num_)

// document.write($num)

// QUESTION 28
// var userInput = prompt("Enter you weight", "57.8 kilograms")
// document.write(parseFloat(userInput))

//ya alphabet remove kar ta hai

// QUESTION 29
var userInput =prompt ("can you play game guess number 1 t0 10 ")
var num = Math.random
var simpleNum = num * 10 + 1

if(userInput == simpleNum){
    alert("congratulate youre guess true")
}
else{
    alert("play again")
}



