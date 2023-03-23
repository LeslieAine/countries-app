import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Countries from '../components/Countries';

describe('Countries', () => {
  it('should render the component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Countries />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have a select element', () => {
    render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(screen.getByRole('combobox')).toBeTruthy();
  });

  it('should have a select element with 8 options', () => {
    render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(screen.getAllByRole('option').length).toBe(8);
  });
});
