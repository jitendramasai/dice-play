document.getElementById('rollBtn').addEventListener('click', () => {
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('dice1').src = `https://upload.wikimedia.org/wikipedia/commons/${diceMap(roll1)}.svg`;
  document.getElementById('dice2').src = `https://upload.wikimedia.org/wikipedia/commons/${diceMap(roll2)}.svg`;

  document.getElementById('result').innerText = `Result: ${roll1 + roll2}`;
});

function diceMap(num) {
  return {
    1: '1/1b/Dice-1-b',
    2: '5/5f/Dice-2-b',
    3: '2/2c/Dice-3-b',
    4: '8/8d/Dice-4-b',
    5: '5/55/Dice-5-b',
    6: 'f/f4/Dice-6-b'
  }[num];
}
