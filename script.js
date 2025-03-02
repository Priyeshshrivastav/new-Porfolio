document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const result = document.getElementById('result');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fileName = searchInput.value.trim();
        
        if (fileName) {
            // Simulate file search
            const files = ['file1.txt', 'file2.txt', 'file3.txt']; // Example file list
            if (files.includes(fileName)) {
                result.textContent = `File "${fileName}" found.`;
            } else {
                result.textContent = `File "${fileName}" not found.`;
            }
        } else {
            result.textContent = 'Please enter a file name.';
        }
    });
});
    document.addEventListener('DOMContentLoaded', function() {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarNav = document.querySelector('#navbarNav');

      navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
      });
    });