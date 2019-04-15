import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

process.env.REACT_APP_NAME = 'chain_node_web';

global.document.body.createRange = () => ({
  setEnd: () => {},
  setStart: () => {},
  getBoundingClientRect: () => {},
});

configure({ adapter: new Adapter() });
