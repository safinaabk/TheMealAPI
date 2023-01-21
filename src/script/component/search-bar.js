class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search_container {
      width: 40%;
      margin: 25px auto auto auto;
      display : flex;
      border-radius: 72px;
      background: linear-gradient(145deg, #ffffff, #e1e1e1);
      box-shadow:  5px 5px 10px #9e9e9e, -5px -5px 10px #ffffff;
    }
    .search_container > input {
      width: 100%;
      border : none;
      padding: 20px 15px 20px 30px;
      border-radius: 72px 0 0 72px;
      font-size : large;
      text-align: center;
    }
    
    .search_container > input::placeholder {
      font-size: large;
    }
    
    .search_container > button {
      display: block;
      padding: 10px;
      border: none;
      border-radius: 0 72px 72px 0;
      font-size: large;
      cursor: pointer;
    }
    
    .search_container > button:hover {
      border : 2px solid;
    }
    </style>
    <div class="search_container">
        <input type="search" id="searchElement" placeholder="Search Meal..." />
        <button type="submit" id="searchButtonElement">Search</button>
    </div>
    `;
    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
