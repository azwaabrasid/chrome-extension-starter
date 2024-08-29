export const pause = (ms: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, ms));

export const waitForElement = async (
  container: Element | Document,
  selector: string,
  signal?: AbortSignal,
  maxAttempts = 100,
  pauseDuration = 250,
): Promise<HTMLElement | null> => {
  let attempts = 0;

  while (attempts < maxAttempts) {
    const element = container.querySelector<HTMLElement>(selector);
    if (element) return element;

    // eslint-disable-next-line no-await-in-loop
    await pause(pauseDuration);
    if (signal?.aborted) return null;
    attempts += 1;
  }

  return null;
};

export const waitForElements = async (
  container: Element | Document,
  selector: string,
  signal?: AbortSignal,
  maxAttempts = 100,
  pauseDuration = 250,
): Promise<NodeListOf<Element> | null> => {
  let attempts = 0;

  while (attempts < maxAttempts) {
    const element = container.querySelectorAll(selector);
    if (element) return element;

    // eslint-disable-next-line no-await-in-loop
    await pause(pauseDuration);
    if (signal?.aborted) return null;
    attempts += 1;
  }

  return null;
};
