let UserName = prompt("Whats your name")
if(UserName == "Admin") {
    let pass = prompt("Whats the password?")
    if(pass == '' || pass == null) {
        alert("Canceled")
    }else if(pass === 'TheMaster') {
        alert('Welcome')
    }else {
        alert('Wrong Password')
    }
}else if (UserName == '' || UserName == null) {
    alert("Canceled")
}else{
    alert("I dont know you")
}
