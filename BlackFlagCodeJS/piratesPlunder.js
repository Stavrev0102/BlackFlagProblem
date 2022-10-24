function pirates(input) {

    let daysOfPlunder = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let totalPlunder = 0;


    for (let i = 1; i < daysOfPlunder + 1; i++) { //current day = i
        totalPlunder += dailyPlunder

        if (i % 3 == 0) {
            totalPlunder += dailyPlunder / 2
        }
        if (i % 5 === 0) {
            totalPlunder = (totalPlunder - totalPlunder * 0.30)
        }
    }

    let percentage = (totalPlunder / expectedPlunder * 100)
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
pirates((["10", "20", "380"]))