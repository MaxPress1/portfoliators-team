document.addEventListener('DOMContentLoaded', () => {
  const toggleInput = document.getElementById('theme-toggle-checkbox');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleInput.checked = true;
  }

  toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});