function getSubstitute() {
  const ingredient = document.getElementById('ingredient').value;
  const reason = document.getElementById('reason').value;
  const resultDiv = document.getElementById('result');

  resultDiv.textContent = `Looking for a ${reason} substitute for "${ingredient}"...`;

  // Simulated result for testing
  setTimeout(() => {
    resultDiv.textContent = `"${ingredient}" substitutes for ${reason}:\n- Option 1\n- Option 2\n- Option 3`;
  }, 1000);
}
