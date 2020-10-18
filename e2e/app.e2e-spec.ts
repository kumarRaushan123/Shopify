import { ShopifyPage } from './app.po';

describe('shopify App', () => {
  let page: ShopifyPage;

  beforeEach(() => {
    page = new ShopifyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
