// DATA PRODUK & SUMMARY (Untuk Dashboard dan Products Page)

const products = [
    { id: 1, name: "Ikan Etong", price: 45000, stock: 50 },
    { id: 2, name: "Ikan Kakap", price: 50000, stock: 30 },
    { id: 3, name: "Ikan Pihi", price: 55000, stock: 20 }
];

const summary = {
    totalProducts: products.length, 
    totalSales: 85, 
    totalRevenue: 12500000 
};

// FUNGSI UNTUK HALAMAN LOGIN (index.html)

function handleLogin(event) {
    event.preventDefault(); // Mencegah form reload

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value; 
    
    // NIM yang diwajibkan untuk login
    const requiredNIM = '24090110'; 

    // 1. Validasi Input Kosong
    if (emailInput === "" || passwordInput === "") {
        alert("Email dan Password (NIM) tidak boleh kosong!"); 
        return;
    }

    // 2. Validasi Password (NIM)
    if (passwordInput !== requiredNIM) {
        alert("NIM/Password yang Anda masukkan salah. Password harus diisi: 24090110"); 
        return;
    }

    // 3. Login Berhasil & Redirect
    alert("Login berhasil!");
    window.location.href = 'dashboard.html'; // Pindah ke halaman dashboard
}

// FUNGSI UNTUK HALAMAN DASHBOARD (dashboard.html)

function populateDashboard() {
    // Fungsi ini dipanggil di dashboard.html
    const productCountElement = document.getElementById('product-count');
    if (!productCountElement) return;

    productCountElement.textContent = summary.totalProducts;
    document.getElementById('sales-count').textContent = summary.totalSales;
    
    // Format mata uang untuk revenue
    const formattedRevenue = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(summary.totalRevenue);
    document.getElementById('revenue-amount').textContent = formattedRevenue;
}

// FUNGSI UNTUK HALAMAN PRODUCTS (products.html)

function populateProductsTable() {
    // Fungsi ini dipanggil di products.html
    const tableBody = document.getElementById('product-table-body');
    if (!tableBody) return; 

    tableBody.innerHTML = ''; 

    products.forEach((product, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = new Intl.NumberFormat('id-ID').format(product.price);
        row.insertCell().textContent = product.stock;
        
        const actionCell = row.insertCell();

        // Tombol Edit
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => {
            alert(`Edit produk ${product.name}`);
        };
        editButton.className = 'action-btn edit-btn';

        // Tombol Delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            if (confirm(`Yakin hapus produk ${product.name} ini?`)) {
                row.remove(); 
            }
        };
        deleteButton.className = 'action-btn delete-btn';

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

// SETUP EVENT LISTENER UTAMA (Wajib)

document.addEventListener('DOMContentLoaded', () => {
    // Menghubungkan form login ke fungsi handleLogin
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Menjalankan fungsi di dashboard.html
    populateDashboard();

    // Menjalankan fungsi di products.html
    populateProductsTable();
});