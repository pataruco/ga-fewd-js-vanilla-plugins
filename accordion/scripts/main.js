const accordionTitles = document.querySelectorAll('dt');

accordionTitles.forEach(accordionTitle =>
  accordionTitle.addEventListener('click', openAccordion),
);

function closeAllAccordions() {
  accordionTitles.forEach(accordionTitle =>
    accordionTitle.classList.remove('accordion-open'),
  );
}

function openAccordion(event) {
  closeAllAccordions();
  event.target.classList.toggle('accordion-open');
}
