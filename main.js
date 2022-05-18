const source = document.getElementById('test').innerHTML;
const template = Handlebars.compile(source);
const context = {
  arr: [
   {
     names: 'Menu',
     image: './image/menu.png'
    },
    {
      names: 'Specials',
      image: './image/spec.png',
    },

    {
      names: 'Maps',
      maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.1018966313784!2d-5.552654391894866!3d33.884404921837756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda0452ff795b8b9%3A0x4e3fa4dc8155e27d!2sMechouard%2C%20Meknes!5e0!3m2!1sen!2sma!4v1650414964148!5m2!1sen!2sma" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    },
  ]
} 
const compiledHtml = template(context)
const fill = document.getElementById('home-tiles');
fill.innerHTML = compiledHtml ; 