import { MyGuessNumberAppPage } from './app.po';

describe('my-guess-number-app App', () => {
  let page: MyGuessNumberAppPage;

  beforeEach(() => {
    page = new MyGuessNumberAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
