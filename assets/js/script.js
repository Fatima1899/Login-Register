let registerForm=document.getElementById("formRegister")
registerForm.addEventListener("submit",function(){
    if(!localStorage.getItem("users")){
        localStorage.setItem("users",JSON.stringify([]))
    }
    
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    let user={};

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else  {
        let dbUsersArr=JSON.parse(localStorage.getItem("users"));
        console.log(dbUsersArr);

        let existUser=dbUsersArr.find(user=>user.name===name);

        if(existUser==undefined){
            user.name=name.value;
        user.password=pw.value
        dbUsersArr.push(user);
        localStorage.setItem('users', JSON.stringify(dbUsersArr));
        }
        else{
            alert(`${name} artiq movcuddur`)
        }
    }
    

    
})

