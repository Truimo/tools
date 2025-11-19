import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('m-header')
export class MHeader extends LitElement {
  @property({ type: String }) title = 'Tools Website';


  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: "Inter", "Segoe UI", sans-serif;
    }

    header {
      width: 100%;
      background: #fafafa;
      color: #222;
      border-bottom: 1px solid #e0e0e0;
      padding: 14px 24px;
      box-sizing: border-box;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
  `;

  render() {
    return html`

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-header': MHeader
  }
}
