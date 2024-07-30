const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", checkPalindrome);


function checkPalindrome(event) {
  event.preventDefault();
  const input = document.getElementById("text-input").value.toLowerCase();
  if (!input) {
    alert("Please input a value");
  }
  const result = document.getElementById("result");
  
  var stripped = input.replace(/[^A-Za-z0-9]/g, '');
  
  let j = stripped.length - 1;
  let i = 0;

  let isPalindrome = true;

  while( i!= Math.floor(stripped.length/2) ) {
    let first = stripped.charAt(i);
    let last = stripped.charAt(j);
    if (first !== last) {
      isPalindrome = false;
    }
    i ++;
    j --;
  }
  display(input, isPalindrome);
}

function display(input, isPalindrome) {
  
  if (isPalindrome) {
    result.innerText = `${input} is a palindrome`;
  } else {
    result.innerText = `${input} is not a palindrome`;
  }
  result.style.display="block";
}
