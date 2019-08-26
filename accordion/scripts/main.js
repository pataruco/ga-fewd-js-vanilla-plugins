const accordionTitles = Array.from(document.querySelectorAll('dt'));

accordionTitles.forEach(accordionTitle =>
  accordionTitle.addEventListener('click', openAccordion),
);

function closeAllAccordionsExcept(element) {
  const index = accordionTitles.indexOf(element);
  const filteredAccordionTitles = accordionTitles.filter(
    (accordionTitle, i) => {
      if (i !== index) {
        return accordionTitle;
      }
    },
  );

  filteredAccordionTitles.forEach(accordionTitle =>
    accordionTitle.classList.remove('accordion-open'),
  );
}

function openAccordion(event) {
  const currentTarget = event.currentTarget;

  let target;
  if (currentTarget.nodeName === 'DT') {
    target = currentTarget;
  } else {
    target = currentTarget.parentNode;
  }
  closeAllAccordionsExcept(target);
  return target.classList.toggle('accordion-open');
}
