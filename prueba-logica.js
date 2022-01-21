var I, fares = new Array(5);
cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
discount = 20;

I = prompt("Please enter the duration of your trip in miles:");
for (var i = 0; i < 5; i++) {
    fares[i] = prompt("Enter the cost of a mile for " + cars[i] + ": ");
}

fancyRide(I, fares);

function fancyRide(I, fares) {
    if (I < 4 || I > 30)
        return "The miles cannot be less than 4 or more than 30 miles.";

    if (fares.every(e => { return e >= 0.3 && e <= 5.0 })) {
        if(fares.filter((f, i) => f > fares[i + 1]).length === 0){
            for (let i = fares.length-1; i >= 0 ; i--) {
                if( (I * fares[i]) <= discount){
                    return cars[i];
                }   
            }
        }else{
            return "Mileage cost must be in ascending order.";
        }
    }else
        return "Mileage cost cannot be less than 0.3 or more than 5.0.";
}

// Example
// console.log(fancyRide(30,[0.3,0.5,0.7,1,1.3]));
