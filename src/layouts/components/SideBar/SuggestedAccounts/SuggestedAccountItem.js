import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);
function SuggestedAccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://lh3.googleusercontent.com/a/ACg8ocKlqzKhMhkZyeqUReHf70LqzFttrSpygiHSpGWkd9NhJqDS9yn8=s288-c-no"
                alt="BenNguyen"
            />
            <div className={cx('user-info')}>
                <h4 className={cx('nickname')}>BenNguyen26</h4>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                <p className={cx('username')}>Nguyen Khac Ly</p>
            </div>
        </div>
    );
}

SuggestedAccountItem.propTypes = {};

export default SuggestedAccountItem;
