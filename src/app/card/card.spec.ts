import {CardComponent} from './card.component'
describe('checkString', () => {
  let card: CardComponent;
  beforeEach(() => { card = new CardComponent();});
  it('check for black', () => {
    expect(card.checkString('qweee')).toBe('text');
  });
  it('check for red', () => {
    expect(card.checkString('qwewq')).toBe('red');
  });
  it('check for green', () => {
    expect(card.checkString('22121')).toBe('green');
  });
  it('check for none', () => {
    expect(card.checkString('w000q')).toBe('none');
  });
})