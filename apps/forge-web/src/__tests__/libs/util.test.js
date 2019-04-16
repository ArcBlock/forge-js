import { selectNetwork, detectLocale, getGraphQLEndpoint } from '../../libs/util';
import storage from '../../libs/storage';

describe('#selectNetwork', () => {
  process.env.REACT_APP_NAME = 'explorer';

  it('should be a function', () => {
    expect(typeof selectNetwork).toEqual('function');
  });

  it('should default to argon', () => {
    expect(selectNetwork()).toEqual('argon');
  });

  it('should choose localStorage if exists', () => {
    storage.setItem('switcher.current', JSON.stringify('bromine'));
    expect(selectNetwork()).toEqual('bromine');
    storage.removeItem('switcher.current');
  });

  it('should choose query param if exists', () => {
    storage.setItem('switcher.current', JSON.stringify('bromine'));
    expect(selectNetwork('?network=argon')).toEqual('argon');
    storage.removeItem('switcher.current');
  });

  it('should choose path param if exists', () => {
    storage.setItem('switcher.current', JSON.stringify('bromine'));
    expect(selectNetwork('?network=argon', '/titanium/explorer/web')).toEqual('titanium');
    storage.removeItem('switcher.current');
  });

  process.env.REACT_APP_NAME = '';
});

describe('#detectLocale', () => {
  it('should be a function', () => {
    expect(typeof detectLocale).toEqual('function');
  });

  it('should locale default to en', () => {
    expect(detectLocale().locale).toEqual('en');
  });
});

describe('#getGraphQLEndpoint', () => {
  process.env.REACT_APP_NAME = 'chain_node_web';

  it('should be a function', () => {
    expect(typeof getGraphQLEndpoint).toEqual('function');
  });

  it('should get default', () => {
    expect(getGraphQLEndpoint()).toEqual('http://localhost:8210/api');
  });

  it('should get `GQL_ENDPOINT` when set', () => {
    storage.setItem('GQL_ENDPOINT', 'something');
    expect(getGraphQLEndpoint()).toEqual('something');
    storage.removeItem('GQL_ENDPOINT');
  });

  it('should get production', () => {
    process.env.NODE_ENV = 'production';
    expect(getGraphQLEndpoint()).toEqual('http://localhost/api');
  });

  it('should get explorer beta url', () => {
    process.env.REACT_APP_NAME = 'explorer-beta';
    expect(getGraphQLEndpoint()).toEqual('https://test.abtnetwork.io/api');
  });

  it('should get explorer beta url', () => {
    process.env.REACT_APP_NAME = 'explorer';
    expect(getGraphQLEndpoint()).toEqual('https://argon.abtnetwork.io/api');
  });
});

afterEach(() => {
  process.env.REACT_APP_NAME = '';
  process.env.NODE_ENV = '';
});
