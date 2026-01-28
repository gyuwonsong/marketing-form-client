export function onlyDigits(s = "") {
  return String(s).replace(/\D/g, "");
}

export function isValidBirth(yyyymmdd) {
  const v = onlyDigits(yyyymmdd);
  if (v.length !== 8) return false;

  const y = Number(v.slice(0, 4));
  const m = Number(v.slice(4, 6));
  const d = Number(v.slice(6, 8));

  if (y < 1900 || y > new Date().getFullYear()) return false;
  if (m < 1 || m > 12) return false;
  if (d < 1 || d > 31) return false;

  return true;
}

export function isValidPhone(phone) {
  const v = onlyDigits(phone);
  if (v.length === 11 && v.startsWith("010")) return true;
  if (v.length >= 9 && v.length <= 11) return true;
  return false;
}
