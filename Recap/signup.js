const registrationForm = document.getElementById('registration_form');
registrationForm.addEventListener('submit',function(e){

    e.preventDefault();
    window.location.href = 'checkout.html?firstname='+ document.getElementsByName('first_name')[0].value + '&lastname=' + document.getElementsByName('last_name')[0].value; 
    //checkout sayfasina giderken neleri yanimda götüreyim satiri....
    //--------------------------
    // alert(document.getElementsByName('first_name')[0].value + '&lastname=' + document.getElementsByName('last_name')[0].value;)
    
});

const lastNameInput = document.getElementsByName('last_name')[0];
const remainCharSpan = document.getElementById('charCount');

const showRemainChar = () =>{
    if(lastNameInput.value.length > 0 ){
        remainCharSpan.style.visibility = "visible";
        remainCharSpan.innerText = lastNameInput.value.length+ '/40';
    }
    else{
        remainCharSpan.style.visibility = "hidden";
    }
}

lastNameInput.addEventListener('keyup',showRemainChar);


//--------------------------------------Birthday

let birthday = document.getElementsByName('birthday')[0];

// event listener tanimlayip date formatina cevirim
birthday.addEventListener("change",function(){
    alert(new Date(this.value).toLocaleDateString() + ' date is selected!');

});

// birthday.addEventListener('change',function(e){
//     alert(e.value) + 'date is selected!';
// });

//e- mail richtigkeit check!
const validateEmail  = () =>{
    let email = document.getElementsByName("email")[0];
    let errorSpan = document.querySelector("#errorSpan");
    console.log(errorSpan);
    const regexPattern = /\S+\@+\S+\.+\S/;
    if (!regexPattern.test(email.value)){
        errorSpan.innerHTML = "Invalid Email Adress";
        errorSpan.style.color = "red";
    }
    else{
        errorSpan.innerHTML = "Your Email is valid";
        errorSpan.style.color = "green";
    }
}