document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-year]').forEach((item) => {
        item.textContent = new Date().getFullYear();
    });

    document.querySelectorAll('[data-placeholder-form]').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            const success = form.querySelector('.form-success');
            if (success) {
                success.classList.add('is-visible');
                success.setAttribute('tabindex', '-1');
                success.focus();
            }
            form.reset();
            form.classList.remove('was-validated');
        });
    });

    const roleSelect = document.querySelector('[data-role-select]');
    const requestedRole = new URLSearchParams(window.location.search).get('role');
    if (roleSelect && requestedRole) {
        roleSelect.value = requestedRole;
    }
});
