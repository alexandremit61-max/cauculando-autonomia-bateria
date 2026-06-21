/**
 * Altera telas suavemente na SPA
 * @param {string} screenId 
 */
function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Converte horas decimais para string amigável de horas e minutos
 * @param {number} totalHoursDecimal 
 * @returns {string}
 */
function formatAutonomyTime(totalHoursDecimal) {
  if (isNaN(totalHoursDecimal) || totalHoursDecimal <= 0 || !isFinite(totalHoursDecimal)) {
    return "0 horas e 0 minutos";
  }

  const hours = Math.floor(totalHoursDecimal);
  const minutes = Math.round((totalHoursDecimal - hours) * 60);
  
  if (minutes === 60) {
    return `${hours + 1} horas e 0 minutos`;
  }

  return `${hours} horas e ${minutes} minutos`;
}

/**
 * Cálculo Lítio
 */
function calculateLithium(event) {
  event.preventDefault();

  const nominalCapacity = parseFloat(document.getElementById('lit-cap').value);
  const quantity = parseInt(document.getElementById('lit-qty').value, 10);
  const averageConsumption = parseFloat(document.getElementById('lit-cons').value);

  if (nominalCapacity > 0 && quantity > 0 && averageConsumption > 0) {
    const totalNominal = nominalCapacity * quantity;
    const usefulCapacity = totalNominal * 0.85; 
    const autonomyHours = usefulCapacity / averageConsumption;

    document.getElementById('res-lit-nominal').innerText = `${totalNominal.toFixed(1)} Ah`;
    document.getElementById('res-lit-useful').innerText = `${usefulCapacity.toFixed(1)} Ah`;
    document.getElementById('res-lit-time').innerText = formatAutonomyTime(autonomyHours);

    const resultBox = document.getElementById('result-lithium');
    resultBox.classList.remove('hidden');
    resultBox.classList.add('animate-fade-in');
  }
}

/**
 * Cálculo Estacionária
 */
function calculateStationary(event) {
  event.preventDefault();

  const totalBatteries = parseInt(document.getElementById('stat-qty').value, 10);
  const source1 = parseFloat(document.getElementById('stat-f1').value);
  const source2 = parseFloat(document.getElementById('stat-f2').value);

  if (totalBatteries % 4 !== 0) {
    alert("Por favor, insira uma quantidade total de baterias que seja múltipla de 4 (Ex: 4, 8, 12, 16...).");
    return;
  }

  if (totalBatteries >= 4 && !isNaN(source1) && !isNaN(source2)) {
    const numStrings = totalBatteries / 4;
    const stringCapacity = 63.0; 
    const totalNominal = numStrings * stringCapacity;
    const usefulCapacity = totalNominal * 0.80; 
    const totalConsumption = source1 + source2;
    const autonomyHours = usefulCapacity / totalConsumption;

    document.getElementById('res-stat-strings').innerText = numStrings;
    document.getElementById('res-stat-nominal').innerText = `${totalNominal.toFixed(1)} Ah`;
    document.getElementById('res-stat-useful').innerText = `${usefulCapacity.toFixed(1)} Ah`;
    document.getElementById('res-stat-total-cons').innerText = `${totalConsumption.toFixed(1)} A`;
    document.getElementById('res-stat-time').innerText = formatAutonomyTime(autonomyHours);

    const resultBox = document.getElementById('result-stationary');
    resultBox.classList.remove('hidden');
    resultBox.classList.add('animate-fade-in');
  }
}
