function isPalindrome(biesmojo) {
  if (typeof biesmojo !== 'string') return false;
  // normalisasi: hanya huruf/angka, lowercase
  const normalized = biesmojo
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

module.exports = { isPalindrome };