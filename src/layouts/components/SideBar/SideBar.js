import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { publicRoutes } from '~/routes';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('container')}>
            <h1>SideBar</h1>
            <div className="Navigator">
                <ul>
                    {publicRoutes.map((route, index) => {
                        const pageName = route.catagoryName;
                        return (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) => {
                                        return isActive ? 'activeCatagory' : undefined;
                                    }}
                                    to={route.path}
                                >
                                    {pageName}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
