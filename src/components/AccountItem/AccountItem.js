import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ result }) {
    {
        return (
            <Link to={`/${result.username}`} className={cx('wrapper')}>
                <Image className={cx('avatar')} alt={result.username} src={result.src} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>{result.name}</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <p className={cx('username')}>{result.username}</p>
                </div>
            </Link>
        );
    }
}

AccountItem.propTypes = {
    result: PropTypes.object.isRequired,
};

export default AccountItem;
