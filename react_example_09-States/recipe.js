'use strict';

const e = React.createElement;

class Summary extends React.Component {
  constructor(props) {
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
  constructor(props) {
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

const Instructions = (props) => e('section', { className: 'instructions' },
  e('h2', null, 'Cooking Instructions'),
  props.instructions.map((text, i) => e('p', { key: i }, text))
);

class Recipe extends React.Component {
  render() {
    return e(
      'section',
      { id: this.props.id },
      e(Summary, {
        name: this.props.name, ingredients: this.props.items.length, steps:
          this.props.instructions.length
      }),
      e(IngredientsList, { items: this.props.items }),
      e(Instructions, { instructions: this.props.instructions }),
      e(StarRating)
    );
  }
}



const Star = ({ selected = false, onClick = f => f }) =>
e('span',
{ className: selected ? 'star selected' : 'star', onClick: onClick });
Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: props.starsSelected || 0,
      currentTime: new Date().toLocaleString()
    };
    this.change = this.change.bind(this);
  }
  change(starsSelected) {
    this.setState({ starsSelected, currentTime: new Date().toLocaleString() });
  }
  static propTypes = {
    totalStars: PropTypes.number,
  };
  static defaultProps = {
    totalStars: 5,
  };
  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    console.log(this.state.currentTime);
    return e('div',
    { className: 'star-rating' },
    [...Array(totalStars)].map((n, i) => e(Star, {
      key: i, selected: i < starsSelected,
      onClick: () => this.change(i + 1)
    })),
    e('p', null, starsSelected + ' of ' + totalStars + ' stars'),
    );
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
  {
    ingredientList: items,
    instructionList: instructions,
    id: id, recipeName: recipeName
  }),
  document.getElementById('react-container'));