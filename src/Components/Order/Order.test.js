import React from 'react';
import Order from './Order';

describe('Order', () => {
  // Move dummy data to a separate file
  const currentOrder = {
    starters: {
      id: 1,
      name: 'Borscht',
      price: 5
    },
    mains: {
      id: 2,
      name: 'Vareniki',
      price: 10
    },
    desserts: {
      id: 3,
      name: 'Mille-feuille',
      price: 5
    }
  };
  const order = {
    user1: {
      starters: {
        id: 1,
        name: 'Borscht',
        price: 5
      },
      mains: {
        id: 2,
        name: 'Vareniki',
        price: 10
      },
      desserts: {
        id: 3,
        name: 'Mille-feuille',
        price: 5
      }
    }
  };
  const wrapper = shallow(<Order currentOrder={currentOrder} order={order} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct message', () => {
    expect(wrapper.find('.final-order').text()).toMatch('£20.00');
  });
});
