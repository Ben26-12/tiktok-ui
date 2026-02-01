import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://lh3.googleusercontent.com/a/ACg8ocKlqzKhMhkZyeqUReHf70LqzFttrSpygiHSpGWkd9NhJqDS9yn8=s288-c-no"
                    alt="Ben Nguyen"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>BenNguyen26</h4>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                <p className={cx('username')}>Nguyen Khac Ly</p>
                <div className={cx('statistics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <p className={cx('label')}>Followers</p>
                    <strong className={cx('value')}>2.6M</strong>
                    <p className={cx('label')}>Likes</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
