import React from 'react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  const message =
    "We are sorry, but you can't have Salmon fillet with prawn cocktail!";
  const wrapper = shallow(<ErrorMessage error={message} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct message', () => {
    expect(wrapper.find('.message').text()).toMatch(message);
  });

});
