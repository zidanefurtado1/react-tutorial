'use strict';

const e = React.createElement;

class Summary extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return e('div', { className: 'summary' },
      e('h1', { id: 'recipe-0', 'data-type': 'title' }, this.props.recipeName),
      e('p', null,
        e('span', null, this.props.ingredientCount + ' Ingredients'),
        e('span', null, ' | '),
        e('span', null, this.props.stepCount + ' Steps')
      )
    );
  }
}


class IngredientsList extends React.Component {
  constructor(props){
    super(props);
  }

  //renderListItem(ingredient, i) { return e('li', { key: i }, ingredient);}
  renderListItem = (ingredient, i) => e("li", { key: i }, ingredient);

  render() {
    return e(
      'ul',
      { className: 'ingredients' },
      this.props.items.map(this.renderListItem),
    );
  }
}

const Instructions = (props) => e('section', {className: 'instructions'},
        e('h2', null, 'Cooking Instructions'),
        props.instructions.map((text, i) => e('p', {key: i}, text))
);

class Recipe extends React.Component {

  render() {
    return e('section', { id: this.props.id },
    e(Summary, {recipeName: this.props.recipeName, ingredientCount: this.props.ingredientList.length, stepCount: this.props.instructionList.length}),
    e(IngredientsList, {items: this.props.ingredientList}),
    e(Instructions, {instructions: this.props.instructionList})
    )
  }
}

let items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
];

let instructions = [
  'Preheat the oven to 350 degrees.',
  'Spread the olive oil around a glass baking dish.',
  'Add the salmon, garlic, and pine...',
  'Bake for 15 minutes.',
  'Add the yellow squash and put...',
  'Remove from oven and let cool for 15 ....'
]

let id = 'baked-salmon';

let recipeName = 'Baked Salmon';

ReactDOM.render(e(Recipe, 
  {ingredientList: items, 
    instructionList: instructions, 
    id: id, recipeName: recipeName 
  }), 
  document.getElementById('react-container'));