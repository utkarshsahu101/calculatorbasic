var testArray = [];
function deleteFunction() {
    document.getElementById('result').innerHTML =  null;
    // testArray = [];
    let m=0;
    while (testArray.length > 0) {
        testArray.pop();
        // console.log(testArray[m]);
        m++;
    }
    console.log(testArray);
}

function getInput() {
    let testButton = document.getElementsByClassName('testButton');
    let result = document.getElementById('result')
    let count = 0;
    // var testArray = [];
    var x = '';
    var y = '';
    var z;
    var zx;
    var reset=0;
    const array = [...testButton];
    for(let i=0; i<array.length; i++) {
        array[i].onclick = function() {
            if(reset==1){
                deleteFunction();
                reset=0;
            }
            if(Number.isInteger(parseInt(array[i].innerHTML))) {
                result.innerHTML += array[i].innerHTML;
                x += array[i].innerHTML;
            } else {
                testArray.push(parseInt(x));
                x='';
                console.log(testArray);
                result.innerHTML += array[i].innerHTML;
                y += array[i].innerHTML;
                testArray.push(y)
                y = '';
                count++;
            }
            if(testArray.length > 3) {
                switch(testArray[1]) {
                    case '+':
                        z = testArray[0] + testArray[2];
                        testArray.splice(0, 3);
                        testArray.unshift(z)
                        // console.log(testArray);
                        zx= z + testArray[1];
                        result.innerHTML=zx;
                        break;
                    case '-':
                        z = testArray[0] - testArray[2];
                        testArray.splice(0, 3);
                        testArray.unshift(z)
                        // console.log(testArray);
                        zx= z + testArray[1];
                        result.innerHTML=zx;
                        break;
                    case '*':
                        z = testArray[0] * testArray[2];
                        testArray.splice(0, 3);
                        testArray.unshift(z)
                        // console.log(testArray);
                        zx= z + testArray[1];
                        result.innerHTML=zx;
                        break;
                    case '/':
                        z = testArray[0] / testArray[2];
                        testArray.splice(0, 3);
                        testArray.unshift(z)
                        // console.log(testArray);
                        zx= z + testArray[1];
                        result.innerHTML=zx;
                        break;
                    // case '=':

                }
                if(testArray[1] == '=') {
                    result.innerHTML=z;
                    testArray.unshift(z);
                    console.log(testArray);
                    // testArray[0]=z;
                    // testArray.splice(0, 3);
                    // console.log(testArray);
                    // testArray.unshift(z)
                    // console.log(testArray);
                    // deleteFunction();
                    reset=1;
                    
                }
            } 
        }
    }
}