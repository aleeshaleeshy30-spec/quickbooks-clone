let currentUser = null;
let transactions = [
    { type: "Income", desc: "Freelance Project", amount: 45000, date: "Today" },
    { type: "Expense", desc: "Office Rent", amount: 12000, date: "Yesterday" }
];

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section + '-section').classList.remove('hidden');
    if (section === 'dashboard') renderDashboard();
    if (section === 'invoices') renderInvoices();
}

function renderDashboard() {
    document.getElementById('income').textContent = "₹248,750";
    document.getElementById('expenses').textContent = "₹89,420";
    document.getElementById('profit').textContent = "₹159,330";

    const container = document.getElementById('recent-transactions');
    container.innerHTML = transactions.map(t => `
        <div class="flex justify-between items-center p-6">
            <div>
                <p class="font-medium">${t.desc}</p>
                <p class="text-sm text-gray-500">${t.date}</p>
            </div>
            <p class="${t.type === 'Income' ? 'text-emerald-600' : 'text-red-600'} font-bold">${t.type === 'Income' ? '+' : '-'}₹${t.amount}</p>
        </div>
    `).join('');
}

function renderInvoices() {
    const container = document.getElementById('invoice-list');
    container.innerHTML = `
        <div class="bg-white rounded-3xl p-6 shadow">
            <p class="font-medium">Invoice #INV-001</p>
            <p class="text-emerald-600 font-bold">₹25,000</p>
            <p class="text-sm text-gray-500">Sent to ABC Corp</p>
        </div>
    `;
}

function showNewInvoice() {
    document.getElementById('new-invoice-modal').classList.remove('hidden');
    document.getElementById('new-invoice-modal').classList.add('flex');
}

function createInvoice() {
    alert("✅ Invoice created and sent! (Demo)");
    document.getElementById('new-invoice-modal').classList.add('hidden');
    document.getElementById('new-invoice-modal').classList.remove('flex');
}

function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-modal').classList.add('flex');
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function login() {
    currentUser = "BusinessOwner";
    document.getElementById('login-btn').innerHTML = `👋 ${currentUser}`;
    closeLoginModal();
    alert("✅ Logged in successfully!");
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});