const checkUser = ()=>{
    const input= document.getElementById('userId');
    const inputValue = parseInt(input.value)
    input.value=""
    if(isNaN(inputValue)){
        document.getElementById('error').innerText = "Please Enter the Valid Number";
    }else if(inputValue<1 || inputValue>500){
        document.getElementById('error').innerText = "Please enter the number more than 0 and less than 501";
    }
    console.log(input.value);
}