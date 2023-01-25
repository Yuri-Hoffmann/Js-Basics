try{
    const numbers = [1, 2, 3, 4]; 
    const output = except(null, [1, 2]);
    console.log(output);
}
catch(e){
    console.log(e.message);
}

function except(array, excluded) {
  const output = []; 
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  for (let element of array)
    if (!excluded.includes(element))
      output.push(element); 
  return output; 
}