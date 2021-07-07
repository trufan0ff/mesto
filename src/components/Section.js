/* Класс Section, который отвечает за отрисовку элементов на странице*/

export default class Section {
    constructor({ items, renderer }, listElements) {
        this._renderedItems = items;
        this._renderer = renderer;
        
        this._container = document.querySelector(listElements);
      }

      renderItems() {
        this._renderedItems.forEach(item => this._renderer(item))
      }

      setItems(element) {
        this._container.append(element);
      }
    

    addItem(element) {
        this._container.append(element);
    }
}