class PartyButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isAnimating = false;
    this.bindedAnimate = this.animate.bind(this);
  }

  connectedCallback() {
    this.addEventListener("click", this.partyTime);
  }

  partyTime() {
    const end = Date.now() + 15 * 1000;

    if (this.isAnimating) return;

    console.log("start animatesdf!!");
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error fetching:", error));
  }
}

customElements.define("party-button", PartyButton, { extends: "button" });
