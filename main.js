(function () {
  let template = document.createElement("template");
  template.innerHTML = `
<style>
:host {
border-width: 4px;
border-color: black;
border-style: solid;
width:300px;
height:300px;
display: block;
}
</style>
<p>Rohit</p>
`;
  class ColoredBox extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      this._mydate="202201";
      this.addEventListener("click", (event) => {
        alert("Click the button");
        var event = new Event("onClick");
        this.dispatchEvent(event);
      });
      this._props = {};
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };
    }
    
    onCustomWidgetAfterUpdate(changedProperties) {
      if ("date" in changedProperties) {
        this.mydate = changedProperties["date"];
      }
    }

    get mydate(){
      return this._mydate;
    }
  }
  customElements.define("com-rohitchouhan-quickdate-main", ColoredBox);
})();
