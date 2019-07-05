export class Link {
  text = '';
  link = '';
  constructor(t, link?) {
    this.text = t;
    this.link = link || t.toLowerCase();
  }
}

export const links: Link[] = ['News', 'Regions', 'Video', 'TV'].map(i => new Link(i));
