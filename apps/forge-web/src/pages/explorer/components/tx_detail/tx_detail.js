import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InfoRows from './info_row';
import { getExplorerUrl } from '../../../../libs/util';

export default class TxDetail extends React.Component {
  static propTypes = {
    tx: PropTypes.object.isRequired,
  };

  state = {
    expanded: false,
  };

  rows = {
    hash: { path: 'hash' },
    time: { path: 'time' },
    from: { path: 'tx.from', link: v => getExplorerUrl(`/accounts/${v}`) },
    to: { path: 'tx.itx.to', link: v => getExplorerUrl(`/accounts/${v}`) },
    block: { path: 'height', link: v => getExplorerUrl(`/blocks/${v}`) },
    index: { path: 'index' },
    nonce: { path: 'tx.nonce' },
  };

  render() {
    const { tx, ...rest } = this.props;
    return (
      <Container {...rest}>
        {this.renderHeader()}
        <InfoRows rows={this.rows} data={tx} />

        <div className="raw">
          <Button
            onClick={this.onExpand}
            className="btn-expand"
            variant="outlined"
            size="small"
            color="primary">
            Raw Transaction <ExpandMoreIcon />
          </Button>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <pre>
              <code>{JSON.stringify(tx, true, '  ')}</code>
            </pre>
          </Collapse>
        </div>
      </Container>
    );
  }

  onExpand = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
}

const Container = styled.div`
  .raw {
    margin-top: 32px;

    .btn-expand {
      margin-bottom: 16px;
    }

    code,
    pre {
      font-family: 'Courier New' !important;
    }

    pre {
      background-color: #4a4a4a;
      border-radius: 4px;
      color: #ffffff;
      display: block;
      font-size: 14px;
      line-height: 1.42857143;
      margin: 0 0 20px;
      padding: 16px;
      word-break: break-word;
      word-wrap: break-word;
      text-align: left;
    }
  }
`;
