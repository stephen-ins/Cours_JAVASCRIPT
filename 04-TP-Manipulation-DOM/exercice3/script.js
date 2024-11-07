const calcul = (field) => {
  console.log(field.value);

  const number = field.value;

  const carre = number * number;

  const cube = number ** number; // Equivaut à number * number * number

  console.log(number);
  console.log(carre);
  console.log(cube);
};
