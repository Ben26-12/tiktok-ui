import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popover/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'ENG',
                    title: 'English',
                    children: {
                        data: [
                            {
                                code: 'US',
                                title: 'American',
                            },
                            {
                                code: 'UK',
                                title: 'English',
                            },
                        ],
                    },
                },
                {
                    code: 'VIE',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'SPA',
                    title: 'Spanish',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@ben',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const onChange = (MenuItem) => {
        console.log(MenuItem);
    };
    const isUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo  */}

                <Link to={routesConfig.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </div>
                </Link>

                {/* search */}
                <Search />

                {/* actions */}
                <div className={cx('actions')}>
                    {isUser ? (
                        <>
                            <>
                                <Tippy delay={[0, 200]} placement="bottom-end" content="Upload">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} placement="bottom-end" content="Inbox">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} placement="bottom-end" content="Notification">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={isUser ? USER_MENU_ITEMS : MENU_ITEMS} onChange={onChange}>
                        {isUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/736x/b2/8c/98/b28c98099e6436b4c6fa95a663aa2b02.jpg"
                                alt="Ben Nguyen"
                                fallback="https://lh3.googleusercontent.com/a/ACg8ocKlqzKhMhkZyeqUReHf70LqzFttrSpygiHSpGWkd9NhJqDS9yn8=s288-c-no"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
