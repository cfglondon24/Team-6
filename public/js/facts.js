function showRandomFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factDisplay').textContent = fact;
}

let facts = [
    "Many people who survive sepsis recover completely and their lives return to normal",
    "The best way to reduce the risk of sepsis is to avoid infections",
    "Good personal hygiene like good personal hygiene, like washing hands and preparing food safely can help you avoid infections",
    "Safe water and sanitisation can prevent infection",
    "Infection prevention and control programmes have decreased the number of infections by 30%",
    "Vaccinations against infections can prevent 2-3 million deaths every year",
    "Awareness campaigns have led to a 14% increase in the proportion of people who reognise sepsis symptoms and seek medical attention promptly - keep telling your friends about sepsis"
]

// Call the function when the window loads
window.onload = showRandomFact;
