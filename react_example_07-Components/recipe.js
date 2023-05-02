'use strict';

const e = React.createElement;


const IngredientsList = (props) =>
  React.createElement('ul', { className: 'ingredients' },
    props.items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient))
  );

const Instructions = (props) =>
  React.createElement('section', { className: 'instructions' },
    React.createElement('h2', null, 'Cooking Instructions'),
    props.instructions.map((text, i) => React.createElement('p', { key: i }, text))
  );

class Recipe extends React.Component {
  render() {
    return e('section', { id: this.props.id },
      e('h1', { id: 'recipe-0', 'data-type': 'title' }, this.props.name),
      e(IngredientsList, { items: this.props.items }),
      e(Instructions, { instructions: this.props.instructions })
    );
  }
}

let ingredients = [
  '1 lb salmon',
  '1 cup pine nuts',
  '2 cloves of garlic',
  '2 cups yellow squash'
];

let instructions = [
  'Preheat the oven to 350 degrees.',
  'Spread the olive oil around a glass baking dish.',
  'Add the salmon, garlic, and pine...',
  'Bake for 15 minutes.',
  'Add the yellow squash and put...',
  'Remove from oven and let cool for 15 ....',
];

ReactDOM.render(e(Recipe, { id: 'baked-salmon', name: 'Baked Salmon', items: ingredients, instructions: instructions }), document.getElementById('react-container'));