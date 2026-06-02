const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const icon = header.querySelector('.accordion-icon');
    
    // Toggle the active class on the parent item container
    accordionItem.classList.toggle('active');
    
    // Check if the item is now open and swap the image source accordingly
    if (accordionItem.classList.contains('active')) {
      icon.src = 'https://raw.githubusercontent.com/Kking927/faq-accordion/2ef7f1cf618954195107aa067a8c9755ac9637f9/images/icon-minus.svg';
    } else {
      icon.src = 'https://raw.githubusercontent.com/Kking927/faq-accordion/2ef7f1cf618954195107aa067a8c9755ac9637f9/images/icon-plus.svg';
    }
  });
});
