import isEven from 'is-even-clone';

// DOM elements
const numberInput = document.getElementById('numberInput');
const checkBtn = document.getElementById('checkBtn');
const resultEl = document.getElementById('result');
const resetRow = document.getElementById('resetRow');
const resetBtn = document.getElementById('resetBtn');
const examplesGrid = document.getElementById('examplesGrid');

// Example numbers to display
const sampleNumbers = [4, 7, -2, 0, 13, -8];

function renderExamples() {
  if (!examplesGrid) return;
  examplesGrid.innerHTML = '';

  sampleNumbers.forEach((num) => {
    // Call the actual npm package
    const even = isEven(num);
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'example-chip';
    chip.innerHTML = `
      <span class="chip-num">${num}</span>
      <span class="chip-result ${even ? 'even' : 'odd'}">${even ? 'Even ✓' : 'Odd ✗'}</span>
    `;
    chip.addEventListener('click', () => {
      numberInput.value = num;
      evaluate(num);
    });
    examplesGrid.appendChild(chip);
  });
}

function evaluate(val) {
  if (val === '' || val === null || val === undefined || isNaN(Number(val))) {
    numberInput.classList.add('shake');
    setTimeout(() => numberInput.classList.remove('shake'), 400);
    numberInput.focus();
    return;
  }

  const num = Number(val);

  try {
    // Calling imported npm package function
    const even = isEven(num);

    resultEl.className = `result ${even ? 'even' : 'odd'}`;
    resultEl.innerHTML = `
      <span class="result-emoji">${even ? '🎉' : '⚡'}</span>
      <div class="result-text">
        <div><strong>${num}</strong> is <strong>${even ? 'EVEN' : 'ODD'}</strong></div>
        <small>isEven(${num}) returned ${even}</small>
      </div>
    `;
    resultEl.classList.remove('hidden');
    resetRow.classList.remove('hidden');
  } catch (err) {
    resultEl.className = 'result odd';
    resultEl.innerHTML = `
      <span class="result-emoji">⚠️</span>
      <div class="result-text">
        <div>Error: ${err.message}</div>
      </div>
    `;
    resultEl.classList.remove('hidden');
    resetRow.classList.remove('hidden');
  }
}

// Event listeners
checkBtn.addEventListener('click', () => {
  evaluate(numberInput.value.trim());
});

numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    evaluate(numberInput.value.trim());
  }
});

resetBtn.addEventListener('click', () => {
  numberInput.value = '';
  resultEl.classList.add('hidden');
  resetRow.classList.add('hidden');
  numberInput.focus();
});

// Initialize
renderExamples();
