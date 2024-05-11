import react, {component} from 'react'

const checkEmpty =(value) =>{
    if (value == null || value ==''){
        return String("Không được để trống")
    }
    return true
}
const checkLength = (value, min,max)=>{

    if (value.length < min || value.length > max){
        return String(`Số lượng ký tự phải nằm từ ${min} tới ${max}`)
    }
    else{
        return true
    }

    
}
const trimvalue =(value) =>{
    if (typeof value === 'string' ){
        return value.trim()
    }
    else{return false}
}
const checkUserName = (value) =>{
    
    var valuetrim = trimvalue(value)
    let Empty = checkEmpty (valuetrim);
    if (Empty != true){
        return Empty
    }  
    let checklength = checkLength(valuetrim,6, 20)
    if (checklength != true){
        return checklength
    }
    return true
    
}


const checkPassWord=(value)=>{
    var valuetrim = trimvalue(value)
    let Empty = checkEmpty (valuetrim);
    if (Empty != true){
        return Empty
    }  
    let checklength = checkLength(valuetrim,6, 20)
    if (checklength != true){
        return checklength
    }
    else{
        return true
    }
}


const checkSigIn = (username, password)=>{
    let checkpassWord = checkPassWord(password)
    let checkuserName = checkUserName(username)
    if (checkpassWord== true && checkuserName==true){
        return true
    }
    return false
}

const checkConfirmpw = (password, comfrimpw)=>{
    var valuetrim = trimvalue(comfrimpw)
    var password = trimvalue(password)
    let Empty = checkEmpty (valuetrim);
    if (Empty != true){
        return Empty
    }  
    let checklength = checkLength(valuetrim,6, 20)
    if (checklength != true){
        return checklength
    }
    if (valuetrim != password){
        return String("Không trùng khớp với mật khẩu !")
    }
    
        return true
    

}

const checkEmail =  (value) =>{
    var Emty = checkEmpty(value)
    if(Emty !=true){
        return Emty
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(validRegex)) {
    
        return true;
    
      } else {
    
        return String("Dia chi email khong hop le");
}
}
const checkSignUp = (username,password,confirmpw, email) =>{
    let checkpassWord = checkPassWord(password)
    let checkuserName = checkUserName(username)
    let checkemail = checkEmail(email)
    let checkconfirmpw = checkConfirmpw(confirmpw)
    if (checkpassWord ==true &&  checkuserName ==true &&checkemail ==true &&checkconfirmpw ==true){
        return true
    }
    return false


}

export {checkConfirmpw, checkPassWord, checkUserName, checkEmail, checkSigIn, checkSignUp}