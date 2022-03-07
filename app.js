function bisiesto(number){

    if(number%400==0){
        return true;
    } else if (number%100==0){
        return false;
    }else if(number%4==0){
        return true;
    }
}

export default bisiesto;