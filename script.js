const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const icon = header.querySelector('.accordion-icon');
    
    // 1. Find the content panel connected to this specific button
    const panelId = header.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    
    // Toggle the active class on the parent item container
    accordionItem.classList.toggle('active');
    
    // Check if the item is now open and swap the image source accordingly
    if (accordionItem.classList.contains('active')) {
      icon.src = 'images/icon-minus.svg';
      
      // 2. Update accessibility attributes for the OPEN state
      header.setAttribute('aria-expanded', 'true');
      panel.removeAttribute('hidden');
    } else {
      icon.src = 'images/icon-plus.svg';
      
      // 3. Update accessibility attributes for the CLOSED state
      header.setAttribute('aria-expanded', 'false');
      panel.setAttribute('hidden', '');
    }
  });
});
