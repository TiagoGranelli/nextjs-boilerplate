export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }

  const offset = 80; // Adjust this value based on your header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
