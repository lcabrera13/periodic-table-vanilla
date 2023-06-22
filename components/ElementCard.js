class ElementCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.number = this.getAttribute("number");
    this.symbol = this.getAttribute("symbol");
    this.name = this.getAttribute("name");
    this.weight = this.getAttribute("weight");
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
        display: inline-block;
        width: 60px;
        height: 60px;
        color: white;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        padding: 5px;
        grid-column: var(--grid-column);
        grid-row: var(--grid-row);
        transition: transform 0.1s ease;
        border: 1px solid transparent;
      }

      :host(:hover) {
        transform: scale(1.5);
        z-index: 1;
        border: 1px solid #11111117;
      }

      .atomic-number {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 12px;
      }

      .symbol {
        font-size: 25px;
        font-weight: 700;
        line-height: 1;
        padding-bottom: 4px;
      }

      .atomic-name {
        font-size: 10px;
      }

      .atomic-weight {
        font-size: 12px;
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${ElementCard.styles}</style>
      <div class="atomic-number">${this.number}</div>
      <div class="symbol">${this.symbol}</div>
      <div class="atomic-name">${this.name}</div>
      <div class="atomic-weight">${this.weight}</div>
    `;
  }
}

customElements.define("element-card", ElementCard);
