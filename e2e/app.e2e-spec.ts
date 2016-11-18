import { NGRXTodoPage } from './app.po';

describe('ngrxtodo App', function() {
  let page: NGRXTodoPage;

  beforeEach(() => {
    page = new NGRXTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
