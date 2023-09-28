import { createElement } from '../../render.js';
import { createListTemplate } from './point-list-template.js';


export default class PointListView {
  getTemplate() {
    return createListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
