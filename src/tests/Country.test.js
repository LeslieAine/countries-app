import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Country from '../components/Country';

describe('Country', () => {
  it('should render the component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Country name="Republic of Guatemala" flagEmoji="GT" continent="North America" />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
