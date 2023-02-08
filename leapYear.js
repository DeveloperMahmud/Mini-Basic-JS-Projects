function leapYear(year){
    const result = year % 4;
    if (result == 0) {
        console.log("Yay! It is a Leap Year...")
    }else{
        console.log("Sorry, It is not a Leap Year")
    }
}

leapYear(2024);