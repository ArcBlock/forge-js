import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useToggle from 'react-use/lib/useToggle';

import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

import InfoRows from './info_row';

import dayjs from '../../../../libs/dayjs';
import { getExplorerUrl } from '../../../../libs/util';
import { colors } from '../../../../libs/constant';
import { useNodeInfo } from '../../../../libs/hooks';

// eslint-disable-next-line react/prop-types
function TxStatus({ code }) {
  const style = {
    color: code === 'OK' ? colors.green : colors.red,
    fontWeight: 'bold',
    marginRight: '5px',
  };
  return (
    <span style={Object.assign({ display: 'flex', alignItems: 'center', fontSize: '14px' }, style)}>
      {code === 'OK' ? (
        <CheckIcon style={style} size={12} />
      ) : (
        <ErrorIcon style={style} size={12} />
      )}
      {code}
    </span>
  );
}

// eslint-disable-next-line react/prop-types
function ConfirmStatus({ height }) {
  const [nodeInfo] = useNodeInfo();
  const url = getExplorerUrl(`/blocks/${height}`);
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Link to={url}>{height}</Link>
      <Chip
        variant="outlined"
        style={{ color: colors.green, marginLeft: '16px', background: 'transparent' }}
        label={`${nodeInfo.blockHeight - height} Confirmations`}
      />
    </span>
  );
}

// eslint-disable-next-line react/prop-types
function TimeStatus({ time }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {time}
      <Chip
        variant="outlined"
        style={{ color: colors.green, marginLeft: '16px', background: 'transparent' }}
        label={dayjs(time).fromNow()}
      />
    </span>
  );
}

const rows = {
  hash: { path: 'hash' },
  status: { path: 'code', markup: code => <TxStatus code={code} /> },
  block: { path: 'height', markup: height => <ConfirmStatus height={height} /> },
  time: { path: 'time', markup: time => <TimeStatus time={time} /> },
  from: { path: 'tx.from', link: v => getExplorerUrl(`/accounts/${v}`) },
  to: { path: 'tx.itx.to', link: v => getExplorerUrl(`/accounts/${v}`) },
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
