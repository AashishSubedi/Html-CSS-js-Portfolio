
  // Get the toggle button and check the user's preference from localStorage
  const toggleButton = document.getElementById('toggle-theme');
  const body = document.body;

  // Check if the user has a preference saved in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  // Add event listener to toggle between light and dark modes
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the user's theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
