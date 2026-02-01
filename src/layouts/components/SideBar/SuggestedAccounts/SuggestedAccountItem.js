import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function SuggestedAccountItem() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex={-1} {...attrs}>
                <WrapperTippy>
                    <AccountPreview />
                </WrapperTippy>
            </div>
        );
    };
    return (
        <TippyHeadless placement="bottom" delay={[1000, 0]} interactive offset={[-20, 0]} render={renderPreview}>
            <div className={cx('account-item')}>
                <Image
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
        </TippyHeadless>
    );
}

SuggestedAccountItem.propTypes = {};

export default SuggestedAccountItem;
