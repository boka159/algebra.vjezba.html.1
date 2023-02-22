function checkEmail(email){
    var i = email.indexOf("@");
    if (i > 0){
        var tmpEmailDomain = email.substring(i+1, email.length);
        var z = tmpEmailDomain.indexOf(".");
            if (z > 0){
            return true;
            }
            return false;
    } else {
        return false;
    }
}

var isEmailOk = checkEmail("ime.prezime@t.ht.hr");
console.log("email ok = " + isEmailOk);

return;