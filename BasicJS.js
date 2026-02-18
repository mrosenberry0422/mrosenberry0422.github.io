function tickUp() {
    counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent, 10) + 1;
}
function tickDown() {
    counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent, 10) - 1;
}

function runForLoop() {
    counter = document.getElementById("counter");
    result = document.getElementById("forLoopResult");
    n = parseInt(counter.textContent, 10);
    let output = "";
    for (let i = 0; i <= n; i++) {
        output += i + " ";
    }
    result.textContent = output;
}

function showOddNumbers() {
    counter = document.getElementById("counter");
    result = document.getElementById("oddNumberResult");
    n = parseInt(counter.textContent, 10);
    let output = "";
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0)
            output += i + " ";
    }
    result.textContent = output;
}

function addMultiplesToArray() {
    counter = document.getElementById("counter");
    n = parseInt(counter.textContent, 10);
    arr = [];
    for (let i = Math.floor(n / 5) * 5; i >= 5; i -= 5) {
        arr.push(i);
    }
    console.log(arr);
}

function printCarObject() {
  cType = document.getElementById("carType").value;
  cMPG = document.getElementById("carMPG").value;
  cColor = document.getElementById("carColor").value;
  carObj = { cType, cMPG, cColor };
  console.log(carObj);
}

function loadCar(choice) {
    if (choice == 1) obj = carObject1;
    else if (choice == 2) obj = carObject2;
    else if (choice == 3) obj = carObject3;
    document.getElementById("carType").value = obj.cType ;
    document.getElementById("carMPG").value = obj.cMPG ;
    document.getElementById("carColor").value = obj.cColor;
}

function changeColor(choice){
    p = document.getElementById("styleParagraph");
    if (choice == 1) p.style.color = "red";
    else if (choice == 2) p.style.color = "green";
    else if (choice == 3) p.style.color = "blue";
}
