import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('toggle-button')
export class ToggleButton extends LitElement {
  @property({
    type: Boolean,
    reflect: true,
  })
  pressed = false;

  static get styles() {
    return css`
      :host {
        --base-color: #c7f8f9;
        --hover-color: #6ab1c9;
      }
      .c-button {
        background-color: transparent;
        color: var(--base-color);
        font-size: 1em;
        letter-spacing: 0.1em;
        border: 3px solid var(--base-color);
        margin-bottom: 30px;
        padding: 1rem 3rem;
        width: 200px;
        display: inline-block;
        cursor: pointer;
        border-radius: 5px;
      }
      :host([pressed]) .c-button {
        background-color: var(--base-color);
        color: var(--hover-color);
      }`;
  };

  toggle() {
    this.pressed = !this.pressed;
  }

  render() {
    return html`
      <button class="c-button" @click="${this.toggle}">
        ${this.pressed ? 'ON' : 'OFF'}
      </button>
    `;
  }
}
