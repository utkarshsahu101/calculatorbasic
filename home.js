var testArray = [];

function deleteFunction(index) {
  document.getElementById("result").innerHTML = null;
  // testArray = [];
  let m = 0;
  while (testArray.length > index) {
    testArray.pop();
    // console.log(testArray[m]);
    m++;
  }
  console.log(testArray);
}

function getInput() {
  let testButton = document.getElementsByClassName("testButton");
  let result = document.getElementById("result");
  var x = "";
  var y = "";
  var z;
  var zx;
  var reset = 0;
  var optCount = 0;
  const array = [...testButton];
  for (let i = 0; i < array.length; i++) {
    array[i].onclick = function () {
      if (Number.isInteger(parseInt(array[i].innerHTML))) {
        if (reset == 1) {
            deleteFunction(0);
            reset = 0;
        }
        result.innerHTML += array[i].innerHTML;
        x += array[i].innerHTML;
        console.log(testArray);
      } else {
        if (reset == 1) {
            deleteFunction(1);
            reset = 0;
        }
        console.log(x);
        testArray.push(parseInt(x));
        x = "";
        console.log(testArray);
        result.innerHTML += array[i].innerHTML;
        y += array[i].innerHTML;
        testArray.push(y);
        y = "";
        
        for (let i = 0; i < testArray.length; i++) {
          if (Number.isNaN(testArray[i])) {
            console.log("NaN found at place " + i);
            testArray.splice(1, 1);
          }
        }
      }
      if (testArray.length > 3) {
        switch (testArray[1]) {
          case "+":
            z = testArray[0] + testArray[2];
            testArray.splice(0, 3);
            testArray.unshift(z);
            zx = z + testArray[1];
            result.innerHTML = zx;
            break;
          case "-":
            z = testArray[0] - testArray[2];
            testArray.splice(0, 3);
            testArray.unshift(z);
            zx = z + testArray[1];
            result.innerHTML = zx;
            break;
          case "*":
            z = testArray[0] * testArray[2];
            testArray.splice(0, 3);
            testArray.unshift(z);
            zx = z + testArray[1];
            result.innerHTML = zx;
            break;
          case "/":
            z = testArray[0] / testArray[2];
            testArray.splice(0, 3);
            testArray.unshift(z);
            zx = z + testArray[1];
            result.innerHTML = zx;
            break;
        }
        if (testArray[1] == "=") {
          result.innerHTML = z;
          console.log(testArray);
          reset = 1;
        }
      }
    };
  }
}