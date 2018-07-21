import { JestaPage } from './app.po';

describe('jesta App', function() {
  let page: JestaPage;

  beforeEach(() => {
    page = new JestaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
