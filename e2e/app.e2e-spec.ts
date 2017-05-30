import { MyInstantSearchPage } from './app.po';

describe('my-instant-search App', () => {
  let page: MyInstantSearchPage;

  beforeEach(() => {
    page = new MyInstantSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
