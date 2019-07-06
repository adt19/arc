const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function fmtDt(dt) {
  const y = dt.getFullYear();
  const mn = months[dt.getMonth()];
  const d = dt.getDate();
  const h = dt.getHours();
  const mt = dt.getMinutes();
  return `${d} ${mn}, ${y} ${h}:${mt}`;
}
