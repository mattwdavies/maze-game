import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WealthBar from '../components/WealthBar/WealthBar';
configure({
  adapter: new Adapter(),
});
describe('<WealthBar/> Component', () => {
  it('WealthBar renders a value', () => {
    const wrapper = shallow(<WealthBar wealth="10" />);
    const message = <h1 className="styled">Wealth: 10</h1>;
    expect(wrapper).to.contain(message);
  });
  chai.use(chaiEnzyme());
});
