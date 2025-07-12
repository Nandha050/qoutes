const backendUrl = 'https://qoutes-2.onrender.com/qoute'; // Replace with your actual Render backend URL

async function getQuote() {
  const res = await fetch(backendUrl);
  const data = await res.json();
  document.getElementById('quote').innerText = data.quote;
}
