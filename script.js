// Array of quotes
const quotes = [
    "La vie est ce que nous en faisons, toujours a été, toujours sera. - Grandma Moses",
    "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
    "Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre. - Steve Jobs",
    "Ne jugez pas chaque jour à la récolte que vous faites mais aux graines que vous semez. - Robert Louis Stevenson",
    "Le succès c'est tomber sept fois, se relever huit. - Proverbe japonais",
    "Le bonheur est parfois caché dans l'inconnu. - Victor Hugo",
    "Le seul vrai voyage, ce ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux. - Marcel Proust",
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "L'essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
    "L'imagination est plus importante que le savoir. - Albert Einstein",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "On ne voit bien qu'avec le cœur. - Antoine de Saint-Exupéry",
    "Le seul moyen de se débarrasser d'une tentation, c'est d'y céder. - Oscar Wilde",
    "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets. - John Lennon",
    "Soyez le changement que vous voulez voir dans le monde. - Gandhi"
];

// Add an event listener to the button to generate a new quote
document.getElementById('new-quote').addEventListener('click', function() {
    // Generate a random index to select a quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Display the selected quote in the quote box
    document.getElementById('quote').textContent = quotes[randomIndex];
});