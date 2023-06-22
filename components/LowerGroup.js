import ELEMENTS from "../assets/lowerGroup.json";

class LowerGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.elements = ELEMENTS;
  }

  connectedCallback() {
    this.render();
  }

  static get styles() {
    return `
      :host {
        width: fit-content;
        display: grid;
        grid-template-columns: repeat(18, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 4px;
      }

      .lanthanides {
        background: #005DAA;
      }

      .actinides {
        background: #32D801;
      }
    `;
  }

  getElements() {
    return this.elements
      .map(
        (element) =>
          `<element-card 
            class="${element.category}"
            number=${element.number} 
            symbol=${element.symbol} 
            name=${element.name} 
            weight=${element.weight} 
            category=${element.category} 
            column=${element.column} 
            row=${element.row}></element-card>`
      )
      .join("");
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${LowerGroup.styles}</style>
      ${this.getElements()}
    `;
  }
}

customElements.define("lower-group", LowerGroup);
