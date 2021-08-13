
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const submit= document.querySelector("input[type='submit']");
submit.addEventListener('click', (e)=>{
  if(confirm('Are you sure to submit this form?')){
    e.preventDefault();
 const input=document.querySelector("input[type='email']");
 const inputValue=input.value;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const addErrorMessage=document.getElementById("message");

 if (inputValue===""){  
  addErrorMessage.innerText="The Password can not be empty";
  document.form1.email1.focus();
  
  }
  else
   if (inputValue.match(mailformat)){
  console.log(inputValue);
  addErrorMessage.style.visibility="hidden";
  document.form1.email1.focus()
  
   return true;  
    }
    else{
        addErrorMessage.style.visibility="visible"
        addErrorMessage.innerText="Please provide a valid Email address!"
        document.form1.email1.focus();
    
    return false;
    }

  }})