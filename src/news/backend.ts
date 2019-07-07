import { Item } from './model/item';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

/* tslint:disable-next-line:max-line-length */
const sample = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

function gen(length, p) {
  return Array.from({ length }, (v, i) => {
    const pi = i + p * length;
    return new Item({
      title: 'Item - ' + pi,
      desc: sample.substr(0, sample.length * (pi % 9 + 1) / 10),
      img: env.base + '/assets/img/brand_12' + (pi % 4 === 0 ? '' : '8') + '.png',
      updatedAt: (Date.now() - pi * 12345_000) / 1000
    });
  });
}

const dbSize = 200;
export const pageSize = 15;
export function backend(params) {
  const { page, query = '' } = params;
  const inx = page * pageSize;
  const r = gen(200, page).filter(i => i.title.includes(query))
    .slice(inx, inx + pageSize);
  return of(r).pipe(delay(1000));
}
