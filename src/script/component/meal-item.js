class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }

    .meal-info .meal-thumb{
      width: 50%;
      max-height: 300px;
      object-fit: cover;
      padding-right : 15px;
    } 
    .meal-info {
        padding: 24px;
        display: flex;
    }
      
    h2 , h4{
      padding-top : 10px;
      text-align : center;
    }
      
    meal-info > p {
        padding-left: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; 
    }
    </style>

    <h2>${this._meal.strMeal}</h2>
    <h4>${this._meal.strCategory} - ${this._meal.strArea}</h4>
    <div class="meal-info">
      <img class="meal-thumb" src="${this._meal.strMealThumb}" alt="meal thumb">
      <p> <b>The Instruction : </b> </br> ${this._meal.strInstructions}</p>
   </div>
    `;
  }
}

customElements.define("meal-item", MealItem);
