function P2Led (array: any[]) {
    control.runInParallel(function() {
        let forNum = 0;
        for (let i=0; i<array.length; i++) {
            let forStartIndex = null;
            let forIterateNum = 0;
            let forIterateCount = 0;

            if (array[i] == "on") { 
                pins.digitalWritePin(DigitalPin.P2, 1)
            }
            else if (array[i] == "wait"){
                // basic.pause(500)
                pause(500)
            }
            else if (array[i] == "off") {
                pins.digitalWritePin(DigitalPin.P2, 0) 
            }

            // else if (array[i] == "forstart2") {
            //     if (forStartIndex == null){
            //         forStartIndex = i
            //         forIterateNum = 2
            //         forIterateCount = 0
            //     }
            //     else {
            //         P2Led( array.slice( i, array.indexOf("ifend", i)+1 ) )
            //     }
            // }
            // else if (array[i] == "forstart4") {
            //     if (forStartIndex == null){
            //         forStartIndex = i
            //         forIterateNum = 4
            //         forIterateCount = 0
            //     }
            //     else {
            //         P2Led( array.slice( i, array.indexOf("ifend", i)+1 ) )
            //     }
            // }
            // else if (array[i] == "forend") {
            //     // goto or end
            //     forIterateCount++
            //     // end
            //     if (forIterateCount == forIterateNum ) {
            //         let forStartIndex2 = null;
            //         let forIterateNum2 = 0;
            //         let forIterateCount2 = 0;
            //         return;
            //     }
            //     // goto
            //     else { i = forStartIndex; }
            // }

        }
    })
}
function P1Led (array: any[]) {
    control.runInParallel(function() {
        let forNum3 = 0;
        for (let k=0; k<array.length; k++) {
            let forStartIndex5 = null;
            let forIterateNum5 = 0;
            let forIterateCount5 = 0;

            if (array[k] == "on") { 
                pins.digitalWritePin(DigitalPin.P1, 1)
            }
            else if (array[k] == "off") {
                pins.digitalWritePin(DigitalPin.P1, 0) 
            }
            else if (array[k] == "wait") {
                // basic.pause(500)
                pause(500)
            }

            // else if (array[k] == "forstart2") {
            //     if (forStartIndex5 == null){
            //         forStartIndex5 = k
            //         forIterateNum5 = 2
            //         forIterateCount5 = 0
            //     }
            //     else {
            //         P1Led( array.slice( k, array.indexOf("ifend", k)+1 ) )
            //     }
            // }
            // else if (array[k] == "forstart4") {
            //     if (forStartIndex5 == null){
            //         forStartIndex5 = k
            //         forIterateNum5 = 4
            //         forIterateCount5 = 0
            //     }
            //     else {
            //         P1Led( array.slice( k, array.indexOf("ifend", k)+1 ) )
            //     }
            // }
            // else if (array[k] == "forend") {
            //     // goto or end
            //     forIterateCount5++
            //     // end
            //     if (forIterateCount5 == forIterateNum5 ) {
            //         let forStartIndex6 = null;
            //         let forIterateNum6 = 0;
            //         let forIterateCount6 = 0;
            //         return;
            //     }
            //     // goto
            //     else { k = forStartIndex5; }
            // }
            
        }
    })
}
function P0Led (array: any[]) {
    control.runInParallel(function() {
        let forNum2 = 0;
        for (let j=0; j<array.length; j++) {
            let forStartIndex3 = null;
            let forIterateNum3 = 0;
            let forIterateCount3 = 0;

            if (array[j] == "on") { 
                pins.digitalWritePin(DigitalPin.P0, 1)
            }
            else if (array[j] == "off") {
                pins.digitalWritePin(DigitalPin.P0, 0) 
            }
            else if (array[j] == "wait") {
                // basic.pause(500)
                pause(500)
            }

            // else if (array[j] == "forstart2") {
            //     if (forStartIndex3 == null){
            //         forStartIndex3 = j
            //         forIterateNum3 = 2
            //         forIterateCount3 = 0
            //     }
            //     else {
            //         P0Led( array.slice( j, array.indexOf("ifend", j)+1 ) )
            //     }
            // }
            // else if (array[j] == "forstart4") {
            //     if (forStartIndex3 == null){
            //         forStartIndex3 = j
            //         forIterateNum3 = 4
            //         forIterateCount3 = 0
            //     }
            //     else {
            //         P0Led( array.slice( j, array.indexOf("ifend", j)+1 ) )
            //     }
            // }
            // else if (array[j] == "forend") {
            //     // goto or end
            //     forIterateCount3++
            //     // end
            //     if (forIterateCount3 == forIterateNum3 ) {
            //         let forStartIndex4 = null;
            //         let forIterateNum4 = 0;
            //         let forIterateCount4 = 0;
            //         return;
            //     }
            //     // goto
            //     else { j = forStartIndex3; }
            // }

        }
    })
}
// --- init
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
let code0 = [
"on",
"wait",
"off",
"wait"
]
// "forstart2",
// "forend"
let code1 = [
"off",
"wait",
"on",
"wait"
]
// "forstart4",
// "forend"
let code2 = [
"on",
"wait",
"wait",
"off",
"wait"
]
basic.forever(function () {
    P0Led(code0)
    P1Led(code1)
    P2Led(code2)
})
