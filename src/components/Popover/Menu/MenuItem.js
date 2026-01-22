import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button onClick={onClick} className={cx('menu-item')} leftIcon={item.icon} to={item.to}>
            {item.title}
        </Button>
    );
}
export default MenuItem;
