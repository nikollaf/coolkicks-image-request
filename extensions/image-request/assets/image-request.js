class PartyButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isAnimating = false;
    this.productName = "";
    this.bindedAnimate = this.animate.bind(this);
  }

  connectedCallback() {
    this.productName = this.dataset.productName;
    this.addEventListener("click", this.partyTime);
  }

  partyTime() {
    if (this.isAnimating) return;
    fetch(`https://topdrwr.io/coolkicks/image/request?name=${this.productName}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error fetching:", error));
    this.isAnimating = true;
    this.outerHTML = '<p>Thank you!</p>'
  }
}

customElements.define("party-button", PartyButton, { extends: "button" });
