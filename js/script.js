let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");

let submit = null;

let submitBtn = document.getElementById("submit");

num1.addEventListener("click", function() {
  num1.style.backgroundColor = 'hsl(217, 12%, 63%)';
  num1.style.color = 'hsl(0, 0%, 100%)';

  submit = 1;

  // Set all others back to default inactive
  num2.style.backgroundColor = 'rgba(255,255,255,.1)';
  num2.style.color = 'hsl(217, 12%, 63%)';

  num3.style.backgroundColor = 'rgba(255,255,255,.1)';
  num3.style.color = 'hsl(217, 12%, 63%)';

  num4.style.backgroundColor = 'rgba(255,255,255,.1)';
  num4.style.color = 'hsl(217, 12%, 63%)';

  num5.style.backgroundColor = 'rgba(255,255,255,.1)';
  num5.style.color = 'hsl(217, 12%, 63%)';
});

num2.addEventListener("click", function() {
  num2.style.backgroundColor = 'hsl(217, 12%, 63%)';
  num2.style.color = 'hsl(0, 0%, 100%)';

  submit = 2;

  // Set all others back to default inactive
  num1.style.backgroundColor = 'rgba(255,255,255,.1)';
  num1.style.color = 'hsl(217, 12%, 63%)';

  num3.style.backgroundColor = 'rgba(255,255,255,.1)';
  num3.style.color = 'hsl(217, 12%, 63%)';

  num4.style.backgroundColor = 'rgba(255,255,255,.1)';
  num4.style.color = 'hsl(217, 12%, 63%)';

  num5.style.backgroundColor = 'rgba(255,255,255,.1)';
  num5.style.color = 'hsl(217, 12%, 63%)';
});

num3.addEventListener("click", function() {
  num3.style.backgroundColor = 'hsl(217, 12%, 63%)';
  num3.style.color = 'hsl(0, 0%, 100%)';

  submit = 3;

  // Set all others back to default inactive
  num1.style.backgroundColor = 'rgba(255,255,255,.1)';
  num1.style.color = 'hsl(217, 12%, 63%)';

  num2.style.backgroundColor = 'rgba(255,255,255,.1)';
  num2.style.color = 'hsl(217, 12%, 63%)';

  num4.style.backgroundColor = 'rgba(255,255,255,.1)';
  num4.style.color = 'hsl(217, 12%, 63%)';

  num5.style.backgroundColor = 'rgba(255,255,255,.1)';
  num5.style.color = 'hsl(217, 12%, 63%)';
});

num4.addEventListener("click", function() {
  num4.style.backgroundColor = 'hsl(217, 12%, 63%)';
  num4.style.color = 'hsl(0, 0%, 100%)';

  submit = 4;

  // Set all others back to default inactive
  num1.style.backgroundColor = 'rgba(255,255,255,.1)';
  num1.style.color = 'hsl(217, 12%, 63%)';

  num2.style.backgroundColor = 'rgba(255,255,255,.1)';
  num2.style.color = 'hsl(217, 12%, 63%)';

  num3.style.backgroundColor = 'rgba(255,255,255,.1)';
  num3.style.color = 'hsl(217, 12%, 63%)';

  num5.style.backgroundColor = 'rgba(255,255,255,.1)';
  num5.style.color = 'hsl(217, 12%, 63%)';
});

num5.addEventListener("click", function() {
  num5.style.backgroundColor = 'hsl(217, 12%, 63%)';
  num5.style.color = 'hsl(0, 0%, 100%)';

  submit = 5;

  // Set all others back to default inactive
  num1.style.backgroundColor = 'rgba(255,255,255,.1)';
  num1.style.color = 'hsl(217, 12%, 63%)';

  num2.style.backgroundColor = 'rgba(255,255,255,.1)';
  num2.style.color = 'hsl(217, 12%, 63%)';

  num3.style.backgroundColor = 'rgba(255,255,255,.1)';
  num3.style.color = 'hsl(217, 12%, 63%)';

  num4.style.backgroundColor = 'rgba(255,255,255,.1)';
  num4.style.color = 'hsl(217, 12%, 63%)';
});

submitBtn.addEventListener("click", function() {
    if (submit == null) {
      alert("Please make a number selection before hitting submit!");
    } else {
      let numResult = document.getElementById("num-result");
      numResult.innerHTML = submit;

      let card = document.getElementById("card");
      card.style.display = 'none';

      let thankYouCard = document.getElementById("thank-you-card");
      thankYouCard.style.display = 'flex';
    }
});