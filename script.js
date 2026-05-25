document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.timeline-content').forEach(content => {
    const toggle = content.querySelector('.timeline-toggle');
    content.addEventListener('click', () => {
      content.classList.toggle('expanded');
      if (toggle) {
        toggle.textContent = content.classList.contains('expanded') ? '▲ Less' : '▼ More';
      }
    });
  });
});