// ================================================
// Filtro carte
// ================================================
const filterButtons = document.querySelectorAll('.filter button[data-filter]');

if (filterButtons.length > 0) {
    const cards = document.querySelectorAll('.card-grid .card');
    const countEl = document.getElementById('count');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selected = btn.dataset.filter;
            let visible = 0;

            cards.forEach(card => {
                const match = selected === 'tutti' || card.dataset.category === selected;
                card.style.display = match ? '' : 'none';
                if (match) visible++;
            });

            countEl.textContent = visible;
        });
    });
}

// ================================================
// Gestione form log-in
// ================================================
function handleLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Per favore compila tutti i campi.');
        return;
    }

    alert(`Accesso effettuato come: ${email}`);
}

// ================================================
// Gestione form sing-up
// ================================================


function handleSignup() {
    const nome = document.getElementById('nome').value.trim();
    const cognome = document.getElementById('cognome').value.trim();
    const email = document.getElementById('email').value.trim();
    const pwd = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const terms = document.getElementById('terms').checked;

    if (!nome || !cognome || !email || !pwd || !confirm) {
        alert('Per favore compila tutti i campi.');
        return;
    }
    if (pwd !== confirm) {
        alert('Le password non coincidono.');
        return;
    }
    if (!terms) {
        alert('Devi accettare i termini per procedere.');
        return;
    }

    // Qui andrebbe la logica di registrazione reale
    alert('Account creato. Trorna al Log-in per accedre.');
    return;
}