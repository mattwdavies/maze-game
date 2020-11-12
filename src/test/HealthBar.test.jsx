import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import HealthBar from "../components/HealthBar/HealthBar";
configure({
   adapter: new Adapter()
});
describe("<HealthBar/> Component", () => {
   it("HealthBar renders a value", () => {
      const wrapper = shallow(<HealthBar health="10" />);
      const message = <h1 className="styled">Health: 10</h1>;
      expect(wrapper).to.contain(message);
   });
   chai.use(chaiEnzyme());
});