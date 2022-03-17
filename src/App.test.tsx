/* eslint-disable testing-library/await-async-query */
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from './../test/testUtils';

const setup = () => shallow(<App />);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count');

  expect(count.text()).toBe('0');
});

describe('Increment', () => {
  test('renders increment button', () => {
    const wrapper = setup();
    const incrButton = findByTestAttr(wrapper, 'increment-button');

    expect(incrButton.length).toBe(1);
  });

  test('count increments when button clicked', () => {
    const wrapper = setup();
    const incrButton = findByTestAttr(wrapper, 'increment-button');

    //* click button
    incrButton.simulate('click');

    const count = findByTestAttr(wrapper, 'count');
    expect(count.text()).toBe('1');
  });
});

describe('decrement', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const decrButton = findByTestAttr(wrapper, 'decrement-button');

    expect(decrButton.length).toBe(1);
  });

  test('decrement button has correct label', () => {
    const wrapper = setup();
    const decrButton = findByTestAttr(wrapper, 'decrement-button');

    expect(decrButton.text()).toBe('Decrement');
  });

  test('count decrements when decrement button clicked', () => {
    const wrapper = setup();
    const incrButton = findByTestAttr(wrapper, 'increment-button');
    const decrButton = findByTestAttr(wrapper, 'decrement-button');

    //* click increment button, count: 0 => 1
    incrButton.simulate('click');

    //* click decrement button, count: 1 => 0
    decrButton.simulate('click');

    const count = findByTestAttr(wrapper, 'count');
    expect(count.text()).toBe('0');
  })
});