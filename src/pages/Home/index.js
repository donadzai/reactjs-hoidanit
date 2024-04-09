import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import styles from './home.module.scss';
import Banner from './Banner';
import { increaseCounter, decreaseCounter } from '~/redux/counter/actions';

const cx = classNames.bind(styles);

function Home(props) {
    return (
        <div className={cx('banner-container')}>
            <div className={cx('banner-content')}>
                <Banner />
                <div style={{ textAlign: 'center' }}>
                    <div>Count: {props.count}</div>

                    <button onClick={() => props.increaseCounter()}>Increase Count</button>

                    <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),

        decreaseCounter: () => dispatch(decreaseCounter()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
