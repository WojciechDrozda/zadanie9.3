var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCase = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor' , dinosaurUpperCase);

var textChanged = textCharsAfter.slice(0,textCharsAfter.lenght/2);
console.log(textChanged);