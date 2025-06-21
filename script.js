function getPage() {
      var cropSelect = document.getElementById("crops");
      var selectedValue = cropSelect.value;
      window.location.href = "crop-pages/" + selectedValue + ".html";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fact() {
    var randomNum = getRandomInt(0, 14);
    var fact = funFacts[randomNum];
    var factDisplay = document.getElementById("fact");
    factDisplay.innerHTML = '<p id="factTitle">Fun Fact: <br></p>' + fact;
}

const funFacts = [
    "There is a rare plant commonly named the Jade Vine, which is a type of vine native to the rainforests of Philippines. It is considered to be an endangered species due to its habitats being destroyed.", 
    "When plants are stressed or thirsty, they emit a sound that is not audible to the human ear. It is an ultrasonic click that, when amplified, resembles the popping of popcorn. Always take care of your plants!", 
    "There are over 80,000 types of plants, but we only rely on about 30 types for 90 percent of our diets. Also, we discover approximately 2,000 new species every year.", 
    "The Venus Flytrap is a special plant that uses special waves to capture its prey. It can generate electrical signals to attract flies, other insects, arachnids, and more.", 
    "Strawberries are the only fruit that has it's seeds on the outside. They contain, on average, about 200 seeds. Also, generally, strawberries have more Vitamin C than oranges, containing roughly 85 grams of Vitamin C per cup.",
    "Did you know peanuts actually aren't nuts? They grow underground in pods so therefore, they are considered legumes with the likes of lentils and beans.",
    "The Carolina Reaper, one of the most recognizable peppers, and the lesser known Pepper X, currently hold the record for the spiciest peppers. But did you know they were actually made by the same person? Ed Curie bred both peppers, both deviating from the ghost pepper.",
    "The first people to record the making of wine with grapes, were the Ancient Egyptians more than 5,000 years ago. They made herbal wine for medicinal purposes.",
    "Fun Fact. Bananas actually qualify for being a berry, since they develop from a single flower, and they have a pulpy interior with seeds. Meanwhile, strawberries actually aren't berries, since they bear their seeds on the outside.",
    "Did you know trees have underground fungal networks that they communicate with? They warn each other about any type of danger and about pests. Also, they can even transfer nutrients to each other.",
    "There's a plant known as the resurrection plant that has extremely high tolerance to dehydration, and can be resurrected after being watered. Most likely due to the fact they are native to the deserts, and can be found commonly in the Chihuahuan desert.",
    "Could you guess that there's a plant that smells worse than durian? Well the corpse flower is here to suprise you. Just as advertised, smells like rotting corpses. I does this to attract prey like flies. Pretty good mechanism for warding off predators too.",
    "Guess what? Know about the corpse flower or the Titan Arum? Well this plant can match it's disgusting smell. Also fittingly named, the stinking corpse lily, or Rafflesia Arnoldii. Theres a slight difference between it and the corpse flower, and that is that the corpse lily has one giant flower. M",
    "Trees aren't scary... Right? Well the sandbox tree will have you thinking otherwise. Covered with spikes, poisonous sap, and exploding seeds that go faster than 240km/h, it could scare off the most intimidating tree cutting human. The seed pods build up internal pressure like miniature bombs, and when the pressure builds up, the seeds get flung up to 100 meters away.",
    "Craving some vanilla ice cream? Try the bean pod of the ice cream bean tree. Otherwise known as the Inga Edulis, this tree has bean pods that have a creamy, custardy filling that tastes like vanilla ice cream.",
];

fact()