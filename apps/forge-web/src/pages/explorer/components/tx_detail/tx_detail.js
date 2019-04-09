import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useToggle from 'react-use/lib/useToggle';

import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InfoRows from './info_row';
import { getExplorerUrl } from '../../../../libs/util';

const rows = {
  hash: { path: 'hash' },
  time: { path: 'time' },
  from: { path: 'tx.from', link: v => getExplorerUrl(`/accounts/${v}`) },
  to: { path: 'tx.itx.to', link: v => getExplorerUrl(`/accounts/${v}`) },
  block: { path: 'height', link: v => getExplorerUrl(`/blocks/${v}`) },
  index: { path: 'index' },
  nonce: { path: 'tx.nonce' },
};

export default function TxDetail({ tx, children, ...rest }) {
  const [expanded, toggleExpanded] = useToggle(false);
  return (
    <Container {...rest}>
      {children}
      <InfoRows rows={rows} data={tx} />
      <div className="raw">
        <Button
          onClick={() => toggleExpanded()}
          className="btn-expand"
          variant="outlined"
          size="small"
          color="primary">
          Raw Transaction <ExpandMoreIcon />
        </Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <pre>
            <code>{JSON.stringify(tx, true, '  ')}</code>
          </pre>
        </Collapse>
      </div>
    </Container>
  );
}

TxDetail.propTypes = {
  tx: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

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
