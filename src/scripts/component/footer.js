class footerElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .footer {
        background-color: #251B37;
        color: #FFECEF;
        text-align: center;
        padding: 20px;
        margin-top: 50px;
      }

      @media screen and (max-width: 375px) {
        footer{
          font-size: 10px;
        }
      }
      
    </style>
    <div class="footer">
    <p>Created With ❤️ by Mohammad Luqi 2022 - MakanYuk!</p>
    </div>
        `;
  }
}

customElements.define("footer-element", footerElement);