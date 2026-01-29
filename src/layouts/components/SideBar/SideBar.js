import classNames from 'classnames/bind';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from './SuggestedAccounts';
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
            {/* Menu nav */}
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
            {/* Suggested account */}
            <SuggestedAccounts label="Suggested accounts" />

            {/* Following account */}
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default SideBar;
