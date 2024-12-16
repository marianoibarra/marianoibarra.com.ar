export const $ = <T extends Element = Element>(selector: string, parent: HTMLElement | Document = document): T | null =>
  parent.querySelector(selector);

export const $$ = <T extends Element = Element>(selector: string, parent: HTMLElement | Document = document): Array<T> =>
  Array.from(parent.querySelectorAll(selector));
