const minusIcon = 'http://127.0.0.1:5500/faq-accordion-main/faq-accordion-main/assets/images/icon-minus.svg';
const plusIcon = 'http://127.0.0.1:5500/faq-accordion-main/faq-accordion-main/assets/images/icon-plus.svg';

const icons = document.querySelectorAll('.icon-plus');

handleclick = (e) => {
  const event = e.target;


  const parentContainer = event.closest('.faqsContainer');


  const content = parentContainer.querySelector('.faqs-content');

 
  if (content.classList.contains('active')) {
   
    content.classList.remove('active');
    event.src = plusIcon;
  } else {
    
    document.querySelectorAll('.faqs-content').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.icon-plus').forEach((icon) => (icon.src = plusIcon));

  
    content.classList.add('active');
    event.src = minusIcon;
  }
};

icons.forEach((icon) => {
  icon.addEventListener('click', handleclick);
});
