const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pad(v) {
  return v.toString().padStart(2, '0');
}

export function fmtDt(dt, short = false) {
  const y = dt.getFullYear();
  const mn = months[dt.getMonth()];
  const d = pad(dt.getDate());
  const h = pad(dt.getHours());
  const mt = pad(dt.getMinutes());
  return short ? `${d} ${mn}, ${h}:${mt}` : `${d} ${mn}, ${y} ${h}:${mt}`;
}
