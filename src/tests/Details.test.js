import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Details from '../components/Details';

describe('Details', () => {
  it('should render the component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Details />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
