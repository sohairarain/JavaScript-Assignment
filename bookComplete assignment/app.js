function getElement(){
    const myForm = document.querySelector('.form') 
    const formData = new FormData(myForm) 
    const finalData = Object.fromEntries(formData.entries())     

    console.log(finalData)

    for(key in finalData){    
        let element = document.getElementById(key)
        
        if(finalData[key]== ''){
            console.log(key)
            element.style.border='1px red solid'
            element.setAttribute('class' ,'shake-horizontal' )
        }

        if(finalData[key]!== ''){
            element.style.border='none'
            }

    }

}

// getElement()