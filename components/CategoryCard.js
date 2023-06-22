class CategoryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.column = Number(this.getAttribute("column")) || 0;
    this.row = Number(this.getAttribute("row")) || 0;

    this.style.setProperty("--grid-column", this.column);
    this.style.setProperty("--grid-row", this.row);

    this.render();
  }

  static get styles() {
    return `
      :host {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        color: white;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        padding: 5px;
        grid-column: var(--grid-column);
        grid-row: var(--grid-row);
        border: 1px solid transparent;
      }

      .category-name {
        font-size: 10px;
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${CategoryCard.styles}</style>
      <div class="category-name">${this.name}</div>
    `;
  }
}

customElements.define("category-card", CategoryCard);
