import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';

import CheckIcon from '@material-ui/icons/CheckCircle';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';

import SparkLine from '../../../components/sparkline';
import forge from '../../../libs/forge';

export default class TransactionsSection extends React.Component {
  mapping = {
    DeclareAccount: {
      dataKey: 'numDeclareTxs',
      stroke: '#6DD8D9',
      gradientStart: '#ADE7E7',
    },
    Transfer: {
      dataKey: 'numTransferTxs',
      stroke: '#829DF4',
      gradientStart: '#D0DEF5',
    },
    Exchange: {
      dataKey: 'numExchangeTxs',
      // stroke: colors.gray,
      // gradientStart: '',
    },
    // CreateAsset: {
    //   dataKey: 'numCreateAssetTxs',
    //   stroke: '',
    //   gradientStart: '',
    // },
    // DeclareFile: {
    //   dataKey: 'numDeclareFileTxs',
    //   stroke: '',
    //   gradientStart: '',
    // },
    // Stake: {
    //   dataKey: 'numStakeTxs',
    //   stroke: '',
    //   gradientStart: '',
    // },
  };

  // startDate: moment().format('YYYY-MM-DD'),
  dateRanges = {
    last24Hours: {
      text: 'Last 24 hours',
      dateOffset: 0,
      api: 'getForgeStatisticsByHour',
    },
    last7Days: {
      text: 'Last 7 days',
      offset: 7,
    },
    last30Days: {
      text: 'Last 30 days',
      offset: 30,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      open: false,
      rangeKey: 'last7Days',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loading, data } = this.state;
    return (
      <React.Fragment>
        {loading && (
          <React.Fragment>
            <Typography component="h3">Loading data...</Typography>
            <CircularProgress />
          </React.Fragment>
        )}
        {!loading && data && this.renderSummary(data)}
      </React.Fragment>
    );
  }

  renderSummary(trend) {
    // prettier-ignore
    const series = Object.keys(this.mapping).map(x =>
      SparkLine.createSeries({
        dataKey: x,
        stroke: this.mapping[x].stroke,
        gradientStart: this.mapping[x].gradientStart,
        gradientStop: this.mapping[x].gradientStop,
      }));

    return (
      <ChartContainer>
        <SparkLine data={trend} series={series} legend={true} />
        {this.renderDateChooser()}
      </ChartContainer>
    );
  }

  renderDateChooser() {
    const { open, rangeKey } = this.state;
    const dateRange = this.dateRanges[rangeKey];
    return (
      <div className="date-chooser">
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          className="toggler"
          onClick={this.onToggle}>
          {dateRange.text}
          {open ? <DownIcon className="icon" /> : <RightIcon className="icon" />}
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
              <ClickAwayListener onClickAway={this.onClose}>
                <MenuList>
                  {Object.keys(this.dateRanges).map(x => (
                    <MenuItem key={x} onClick={e => this.onChooseRange(e, x)}>
                      {this.dateRanges[x].text}
                      {x === rangeKey && <CheckIcon className="icon" color="primary" />}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }

  onToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  onChooseRange = (e, key) => {
    if (this.anchorEl.contains(e.target)) {
      return;
    }

    if (this.state.rangeKey === key) {
      this.setState({ open: false });
      return;
    }

    this.setState({ open: false, rangeKey: key }, () => {
      this.loadData();
    });
  };

  onClose = e => {
    if (this.anchorEl.contains(e.target)) {
      return;
    }

    this.setState({ open: false });
  };

  async loadData() {
    this.setState({ loading: true });
    const dateRange = this.dateRanges[this.state.rangeKey];
    const queryType = dateRange.api || 'getForgeStatisticsByDay';
    const endDate = moment().format('YYYY-MM-DD');
    const rangeParams = {
      endDate,
      startDate: moment()
        .subtract(dateRange.offset, 'days')
        .format('YYYY-MM-DD'),
    };
    const params = queryType === 'getForgeStatisticsByDay' ? rangeParams : { date: endDate };

    const { forgeStatistics: rawData } = await forge[queryType](params);
    const keys = Object.keys(rawData);
    const data = rawData[keys[0]].map((v, i) => {
      let time = null;
      if (queryType === 'getForgeStatisticsByDay') {
        time = moment(rangeParams.startDate)
          .add(i, 'days')
          .format('YYYY-MM-DD');
      } else {
        time = moment(endDate)
          .hours(i)
          .startOf('hour')
          .format('YYYY-MM-DD HH:MM');
      }
      const row = { time };

      Object.keys(this.mapping).forEach(x => {
        const { dataKey } = this.mapping[x];
        row[x] = Number(rawData[dataKey][i]);
      });
      return row;
    });

    this.setState({ loading: false, data });
  }
}

const ChartContainer = styled.div`
  height: 320px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3px;
  padding-right: 3px;
  position: relative;

  .date-chooser {
    position: absolute;
    top: -60px;
    right: 0;

    .toggler {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icon {
      margin-left: 5px;
    }
  }
`;
