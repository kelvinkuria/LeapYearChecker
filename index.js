function leapYear(){
    let year = parseInt(prompt("Enter year:"));
    if(isNaN(year)){
        console.log("Please enter a numer")
        return
    }

    if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)){
        console.log(`${year} is a leap year`)
    }else{
        console.log(`${year} is not a leap year`)
    }




}
leapYear();