const source = document.getElementById('single-template').innerHTML;
const context = {
    catego: [
        {
            image: 'burgerimg.png',
            price: '15',
            cent: '85',
            title: 'Hamburger with beef',
            description: 'A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes.',

        },
        {
            image: 'pizzaimg.png',
            price: '12',
            cent: '85',
            title: 'pizza all seasons',
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot',

        },
        {
            image: 'chocolatmousseimg.png',
            price: '5',
            cent: '85',
            title: 'deserts',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers .',

        },
        {
            image: 'soupimg.png',
            price: '2',
            cent: '85',
            title: 'Soup',
            description: ' liquid food especially with a meat, fish, or vegetable stock as a base and often containing pieces of solid food. 2 : something (such as a heavy fog or nitroglycerine) having or suggesting the consistency or nutrient qualities of soup.',

        },
        {
            image: 'saladimg.png',
            price: '6',
            cent: '85',
            title: 'salad',
            description: ' a mixture of raw usually green leafy vegetables (as lettuce) combined with other vegetables (as tomato and cucumber) and served with a dressing. 2 : a mixture of small pieces of food (as meat, fish, pasta, fruit, or vegetables) usually combined with a dressing.',

        },
        {
            image: 'pastaimg.png',
            price: '5',
            cent: '85',
            title: 'italien pasta',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
        {
            image: 'cupcakeimg.png',
            price: '5',
            cent: '85',
            title: 'cupe cake',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
        {
            image: 'eggimg.png',
            price: '5',
            cent: '85',
            title: 'egg',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
        {
            image: 'browniesimg.png',
            price: '5',
            cent: '85',
            title: 'cake',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
        {
            image: 'donutsimg.png',
            price: '5',
            cent: '85',
            title: 'donuts',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
        {
            image: 'juiceimg.png',
            price: '5',
            cent: '85',
            title: 'juice',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
        {
            image: 'cafeimg.png',
            price: '5',
            cent: '85',
            title: 'coffe',
            description: 'Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta. COBUILD Advanced English Dictionary. Copyright © HarperCollins Publishers.',

        },
       
       
    ]
}
const template = Handlebars.compile(source);
const compiledhtml = template(context);
const fill = document.getElementById('dynamic-single')
fill.innerHTML = compiledhtml;