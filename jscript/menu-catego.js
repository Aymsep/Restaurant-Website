const source_categories = document.getElementById('templates-cat').innerHTML;
const template_categories = Handlebars.compile(source_categories)
const context_categories ={
    catego: [
        {
            names: 'Pizza',
            image: 'pizzaimg.png'
        },
        {
            names: 'Burger',
            image: 'burgerimg.png'
        },
        {
            names: 'pasta',
            image: 'pastaimg.png'
        },
        {
            names: 'salad',
            image: 'saladimg.png'
        },
        {
            names: 'soup',
            image: 'soupimg.png'
        },
        {
            names: 'Chocolate',
            image: 'chocolatmousseimg.png'
        },
        {
            names: 'Stacked Brownies',
            image: 'browniesimg.png'
        },
        {
            names: 'Cupcake',
            image: 'cupcakeimg.png'
        },
        {
            names: 'Chocolate Donut',
            image: 'donutsimg.png'
        },
        {
            names: 'Cappuccino',
            image: 'cafeimg.png'
        },
        {
            names: 'Fried Egg',
            image: 'eggimg.png'
        },
        {
            names: 'Juices',
            image: 'juiceimg.png'
        },
    ] 
}
const compiled_categories = template_categories(context_categories);
const fill_categories = document.getElementById('dynamic-menu');
fill_categories.innerHTML = compiled_categories;