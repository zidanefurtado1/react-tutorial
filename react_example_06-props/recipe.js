'use strict';
const e = React.createElement;



class IngredientList extends React.Component {
  constructor(props) {
    super(props);
  }

  createIngredientItem= (ingredient,i) => e('li',{key: i}, ingredient);
  
    render() {
        return e('section', { id: this.props.id },
            e('h1', {id: 'recipe-0', 'data-type': 'title'}, this.props.recipeName),
            e('ul', {classname: 'ingredients'},
                this.props.ingredientList.map(this.createIngredientItem)
            ),
            e('section', { className: 'instructions' },
                e('h2', null, 'Cooking Instructions'),
               this.props.instructions.map((instruction, i) => e('p',{key:i}, instruction))
               // e('p', null, 'Preheat the oven to 350 degrees.'),
            ),
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

let instructions= [
    'Preheat the oven to 350 degrees.',
    'Spread the olive oil around a glass baking dish.',
    'Add the salmon, garlic, and pine...',
    'Bake for 15 minutes.',
    'Add the yellow squash and put...',
    'Remove from oven and let cool for 15 ....',
];

let id = 'baked-salmon';

let recipeName = 'Baked Salmon';

ReactDOM.render(e(IngredientList,{
    recipeName: recipeName,
    ingredientList: items,
    instructions: instructions,
    sectionId: id,}),

 document.getElementById('react-container'));