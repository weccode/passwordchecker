export function checkPassword(password){
    if(password.length < 8){
        return "Password must be at least 8 characters long";
    }
    if(!password.match(/[A-Z]/)){
        return "Password must contain at least one uppercase letter";
    }
    if(!password.match(/[a-z]/)){
        return "Password must contain at least one lowercase letter";
    }
    if(!password.match(/[0-9]/)){
        return "Password must contain at least one number";
    }
    if(!password.match(/[^A-Za-z0-9]/)){
        return "Password must contain at least one special character";
    }
    return "Password is valid";
}



export function checkPasswordWithoutRegEx(password){
    if(password.length < 8){
        return "Password must be at least 8 characters long";
    }
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    
    for(let i = 0; i < password.length; i++){
        const char = password[i];
        
        if(char >= 'A' && char <= 'Z'){
            hasUppercase = true;
        }
        if(char >= 'a' && char <= 'z'){
            hasLowercase = true;
        }
        if(char >= '0' && char <= '9'){
            hasNumber = true;
        }
        if(!isLetterOrNumber(char)){
            hasSpecialChar = true;
        }
    }
    
    if(!hasUppercase){
        return "Password must contain at least one uppercase letter";
    }
    if(!hasLowercase){
        return "Password must contain at least one lowercase letter";
    }
    if(!hasNumber){
        return "Password must contain at least one number";
    }
    if(!hasSpecialChar){
        return "Password must contain at least one special character";
    }
    
    return "Password is valid";
}

function isLetterOrNumber(char){
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}