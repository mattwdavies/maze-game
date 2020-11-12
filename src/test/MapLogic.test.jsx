import React from "react";
import {configure, shallow, mount} from "enzyme";
import chai, {expect, calledWith} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import MapLogic from "../components/MapLogic/MapLogic";
configure({
   adapter: new Adapter()
});
describe("<MapLogic/> Component", () => {

    it('game board state should be true', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('showGameBoard').to.equal(true);
      });
      it('should have an initial wallPosition state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('wallPosition');
      });
      it('should have an initial mapHeight state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('mapHeight');
      });
      it('should have an initial mapWidth state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('mapWidth');
      });
      it('should have an initial threatPosition state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('threatPosition');
      });
      it('should have an initial treasurePosition state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('treasurePosition');
      });
      it('should have an initial playerPosition state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('playerPosition');
      });
      it('should have an initial stairsPosition state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('stairsPosition');
      });
      it('should have an initial prevPlayerPos state', function () {
        const wrapper = shallow(<MapLogic />);
        expect(wrapper).to.have.state('prevPlayerPos');
      });
   chai.use(chaiEnzyme());
});