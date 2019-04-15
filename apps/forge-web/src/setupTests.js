import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

global.document.body.createRange = () => ({
  setEnd: () => {},
  setStart: () => {},
  getBoundingClientRect: () => {},
});

configure({ adapter: new Adapter() });
