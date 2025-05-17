window.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footer-copyright');
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    let yearText = `© ${startYear} Fadhil Prawira. All Rights Reserved`;
    if (currentYear > startYear) {
        yearText = `© ${startYear}-${currentYear} Fadhil Prawira. All Rights Reserved`;
    }
    if (footer) {
        footer.textContent = yearText;
    }
});