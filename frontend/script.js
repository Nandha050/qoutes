const backendUrl = 'https://your-backend-url.onrender.com/quote'; // Replace with your actual Render backend URL

async function getQuote() {
  const res = await fetch(backendUrl);
  const data = await res.json();
  document.getElementById('quote').innerText = data.quote;
}
