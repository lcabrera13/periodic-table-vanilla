import "./ElementCard";
import "./CategoryCard";
import ELEMENTS from "../assets/upperGroup.json";

class UpperGroup extends HTMLElement {
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
        grid-template-rows: repeat(7, 1fr);
        gap: 4px;
      }

      .nonmetals {
        background: #522D6D;
      }

      .halogens {
        background: #7474C1;
      }

      .noble-gases {
        background: #693DE2;
      }

      .alkali-metals {
        background: #0ABCDE;
      }

      .alkaline {
        background: #00548B;
      }

      .transition-metals {
        background: #3A3B3C;
      }

      .post-transition-metals {
        background: #ED7700;
      }

      .metalloids {
        background: #AD1E2D;
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
            column=${element.column} 
            row=${element.row}></element-card>`
      )
      .join("");
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${UpperGroup.styles}</style>
      ${this.getElements()}
      <category-card 
        class="lanthanides"
        name="Lantánidos" 
        column="3" 
        row="6"></category-card>
      <category-card 
        class="actinides"
        name="Actínidos"
        column="3"
        row="7"></category-card>
    `;
  }
}

customElements.define("upper-group", UpperGroup);
