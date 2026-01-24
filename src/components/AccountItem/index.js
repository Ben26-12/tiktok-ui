import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    {
        return (
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDpLcY_KRH2-keUUKRm81nZtBd_Ntfs2_8w&s"
                    alt="Invincible"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>Nguyen Ly</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <p className={cx('username')}>@ben2612</p>
                </div>
            </div>
        );
    }
}
export default AccountItem;
