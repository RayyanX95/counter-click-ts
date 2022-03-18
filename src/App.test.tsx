/* eslint-disable testing-library/await-async-query */
import { shallow, ShallowWrapper } from 'enzyme';
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

    //* click increment button, count: 0 => 1
    const incrButton = findByTestAttr(wrapper, 'increment-button');
    incrButton.simulate('click');
    const countB = findByTestAttr(wrapper, 'count');
    console.log(countB.text());
    
    //* click decrement button, count: 1 => 0
    //! must find `decButton` just before clicking
    const decrButton = findByTestAttr(wrapper, 'decrement-button');
    decrButton.simulate('click');

    const count = findByTestAttr(wrapper, 'count');
    expect(count.text()).toBe('0');
  })
});

describe('error when counter goes below 0', () => { 
  test('error does not show when not needed (first load)', () => { 
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    expect(errorDiv.hasClass('d-none')).toBeTruthy();
   });
  describe('decrement button clicked when count is 0', () => { 
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = setup();

      const decrButton = findByTestAttr(wrapper, 'decrement-button');
      decrButton.simulate('click');
    });

    test('show error message', () => { 
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      expect(errorDiv.hasClass('d-none')).toBeFalsy();
     });

     test('count still display 0', () => { 
       const count = findByTestAttr(wrapper, 'count');
       expect(count.text()).toBe('0');
      });

      test('clicking increment clear error', () => { 
        const increment = findByTestAttr(wrapper, 'increment-button');
        increment.simulate('click');
        
        const errorDiv = findByTestAttr(wrapper, 'error-message');
        expect(errorDiv.hasClass('d-none')).toBeTruthy();
       });
   });
 });