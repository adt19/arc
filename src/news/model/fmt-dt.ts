const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pad(v) {
  return v.toString().padStart(2, '0');
}

export function fmtDt(dt, short = false) {
  const y = dt.getUTCFullYear();
  const mn = months[dt.getUTCMonth()];
  const d = pad(dt.getUTCDate());
  const h = pad(dt.getUTCHours());
  const mt = pad(dt.getUTCMinutes());
  return short ? `${d} ${mn}, ${h}:${mt}` : `${d} ${mn}, ${y} ${h}:${mt}`;
}
