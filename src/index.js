const date = document.getElementById("date");
const num = document.getElementById("luckyNum");
const checkButton = document.getElementById("checkButton");
const statusText = document.getElementById("status");

checkButton.addEventListener("click", check);

function check() {
  const DOB = date.value;
  const luckyNum = parseInt(num.value);
  if (DOB && luckyNum) {
    const splitDOB = DOB.split("-");

    let sum = 0;
    for (let i = 0; i < splitDOB.length; i++) {
      const singleNum = splitDOB[i];
      for (let j = 0; j < singleNum.length; j++) {
        sum += parseInt(singleNum[j]);
      }
    }
    if (sum % luckyNum === 0) {
      statusText.style.display = "block";
      statusText.innerText = "You are lucky!";
    } else {
      statusText.style.display = "block";
      statusText.innerText = "You are not lucky!";
    }
  }
}
