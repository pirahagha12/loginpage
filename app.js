const submit_btn = document.querySelector("button");
submit_btn.onclick = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;



   localStorage.setItem('UserName',username);
   localStorage.setItem('EmailAddress',email);
   localStorage.setItem('Password',pass);


  if(username == "" && email == "" && pass ==""){
     swal("Opps..!", "Input field must be fill", "error");
  
 }
 else{
    swal("Good job!", "registration successful!", "success");
 }

 }



 const login_btn = document.querySelector(".login");
 login_btn.onclick = (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById("Email").value;
    const password = document.getElementById("password").value;    


    const Email = localStorage.getItem("EmailAddress");
    const Password = localStorage.getItem("Password");

    if(emailAddress == "" && password == ""){
        swal("Opps..!", "Input field has no value", "error");
    }
    else{
        if(emailAddress == Email && password == Password ){
            swal("login successful!", "success");
            window.location.assign("indexmain.html");
           
        }
        else{
            swal("Opps..!", "Something is wrong!", "error");
        }

        
    }
}