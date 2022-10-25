const loop = (spinnerSet, time) => {
  let count = 100;
  for (let ele of spinnerSet) {
    setTimeout(() => {
      process.stdout.write(`\r${ele}   `);
    }, count);
    count += 200;
  };
};

const spinnerSet = ["|", "/", "-", "\\", "|", "/", "-", "/", "-", "\\", "|"];

loop(spinnerSet, 200)