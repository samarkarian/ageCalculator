const buttonDate = document.getElementById('birthDateButton')

const picker = new AirDatepicker('#birthDateInput', {
  autoClose: true,
  dateFormat: 'dd/MM/yyyy',
});

buttonDate.addEventListener('click', () => {
    picker.show()
})

const { DateTime } = luxon;

document.getElementById('calculateButton').addEventListener('click', () => {
  const value = document.getElementById('birthDateInput').value.trim();

  if (!value) {
    document.getElementById('result').textContent = '';
    return;
  }

  const birth = DateTime.fromFormat(value, 'dd/MM/yyyy');
  if (!birth.isValid) {
    document.getElementById('result').textContent = 'Invalid date';
    return;
  }

  const now = DateTime.now();
  const diff = now.diff(birth, ['years', 'months', 'days']).toObject();

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  document.getElementById('result').textContent = 
    `${years} years, ${months} months, and ${days} days `;
});