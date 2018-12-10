import React from 'react';
import Order from './Order';

describe('Order', () => {
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
  describe('if order for second guest hasn"t been submitted', () => {
    // Move dummy data to a separate file

    let user = 1;
    let wrapper = shallow(
      <Order currentOrder={currentOrder} order={order} user={user} />
    );

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the correct message', () => {
      expect(wrapper.find('.final-order').text()).toMatch('£20.00');
      expect(wrapper.find('.final-order').text()).toMatch('£20.00');
    });
  });

  describe('if order for second guest has been submitted', () => {
    let user = 3;
    let wrapper = shallow(
      <Order currentOrder={currentOrder} order={order} user={user} />
    );
    it('doesn"t show current order amount, ', () => {
      expect(wrapper.find('.current-order').exists()).toBeFalsy();
    });
  });
});
