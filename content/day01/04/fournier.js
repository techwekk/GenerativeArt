
function dft(x) {
  // small x based on formula
  let fourier = []; // create an empty array - stands for X, store results
  const N = x.length;

  for (let k = 0; k < N; k++) {
    // first loop
    let imaginaryComp = 0;
    let realComp = 0;
    for (let n = 0; n < N; n++) {
      // second nested loop, to calculate each element of capital X
      const phi = (TWO_PI * k * n) / N;
      realComp += x[n] * cos(phi); // is going up by some amount
      imaginaryComp -= x[n] * sin(phi); // is going down by some amount and sum up both
    }
 
    realComp = realComp / N;
    imaginaryComp = imaginaryComp / N; // i is not calculated, but seperated out of the formula

    let freq = k;
    let amp = sqrt(realComp * realComp + imaginaryComp * imaginaryComp); //pythagoras
    let phase = atan2(imaginaryComp, realComp);

    fourier[k] = {
      // Make object, that uses the same im./real numbers
      realComp,
      imaginaryComp,
      freq,
      amp,
      phase
    }; // fourier with k-element in array is equal to
  }
  return fourier;
}