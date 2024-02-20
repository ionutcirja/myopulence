export const isElementLoaded = async (selector: string): Promise<Element | null> => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }

  return document.querySelector(selector);
};
