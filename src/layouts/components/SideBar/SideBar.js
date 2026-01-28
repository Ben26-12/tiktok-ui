import classNames from 'classnames/bind';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './SideBar.module.scss';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupActiveIcon,
    HomeActiveIcon,
} from '~/components/Icons';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('container')}>
            <Menu>
                <MenuItem
                    to={config.routesConfig.home}
                    title="For you"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    to={config.routesConfig.following}
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    to={config.routesConfig.live}
                    title="LIVE"
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default SideBar;
