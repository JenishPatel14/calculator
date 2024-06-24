   let displayValue = '0';
    let pendingValue = '';
    let operator = '';

    function updateDisplay() {
      document.getElementById('display').innerText = pendingValue + operator + displayValue;
    }

    function appendNumber(number) {
      if (displayValue === '0' || displayValue === pendingValue) {
        displayValue = String(number);
      } else {
        displayValue += number;
      }
      updateDisplay();
    }

    function appendDecimal() {
      if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
      }
    }

    function appendOperator(op) {
      if (pendingValue !== '') {
        calculate();
      }
      pendingValue = displayValue;
      operator = op;
      displayValue = '';
      updateDisplay();
    }

    function calculate() {
      let result;
      const prevValue = parseFloat(pendingValue);
      const currValue = parseFloat(displayValue);
      switch (operator) {
        case '+':
          result = prevValue + currValue;
          break;
        case '-':
          result = prevValue - currValue;
          break;
        case '*':
          result = prevValue * currValue;
          break;
        case '/':
          result = prevValue / currValue;
          break;
        default:
          return;
      }
      displayValue = result.toString();
      pendingValue = '';
      operator = '';
      updateDisplay();
    }

    function clearDisplay() {
      displayValue = '0';
      pendingValue = '';
      operator = '';
      updateDisplay();
    }