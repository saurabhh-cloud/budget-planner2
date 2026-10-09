// 1. Dark / Light mode: adds or removes the class "dark" on <body>
function toggleDark() {
  document.body.classList.toggle('dark');
}

// 2. Budget calculator (planner.html)
function calculate() {
  const income = Number(document.getElementById('income').value);
  const spent = Number(document.getElementById('rent').value) + Number(document.getElementById('food').value) +
    Number(document.getElementById('travel').value) + Number(document.getElementById('bills').value) +
    Number(document.getElementById('other').value);
  const left = income - spent;
  if (income < 0 || spent < 0) {
    document.getElementById('result').innerText = '';
    document.getElementById('advice').innerText = 'Amounts cannot be negative.';
    return;
  }
  const rate = income > 0 ? Math.round((left / income) * 100) : 0;
  let advice = 'Great! You are saving 20% or more.';
  if (income <= 0) { advice = 'Please enter your monthly income.'; }
  else if (left < 0) { advice = 'Warning: you are spending more than you earn.'; }
  else if (rate < 20) { advice = 'Try to save at least 20% of your income.'; }
  document.getElementById('result').innerText = `Spent: ₹${spent} | Left: ₹${left} | Savings: ${rate}%`;
  document.getElementById('advice').innerText = advice;
}

// 3. FAQ accordion (faq.html): show or hide the answer under the clicked question
function toggleFaq(btn) {
  btn.nextElementSibling.classList.toggle('open');
}

// 4. Contact form validation (contact.html)
function checkForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const out = document.getElementById('formMsg');
  out.className = 'error';
  if (name.length < 3) { out.innerText = 'Name must have at least 3 letters.'; return false; }
  if (!email.includes('@') || !email.includes('.')) { out.innerText = 'Enter a valid email address.'; return false; }
  if (msg.length < 10) { out.innerText = 'Message must have at least 10 characters.'; return false; }
  out.className = 'ok';
  out.innerText = `Thank you, ${name}! Your message was sent.`;
  return false; // stays on page (no server)
}
