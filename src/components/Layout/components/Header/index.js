import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faCouch,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPaperPlane,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountItem from '~/components/AccountItem';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Menu from '~/components/Popover/Menu';
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
    const [searchResults, setSearchResults] = useState([]);
    const onChange = (MenuItem) => {
        console.log(MenuItem);
    };
    const isUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <TippyHeadless
                    interactive={true}
                    render={(attrs) => (
                        <div {...attrs} tabIndex={-1} className={cx('search-results')}>
                            {/* tạo riêng là để viết css cho thằng .wrapper, không thì mỗi lần tạo 1 drop như này sẽ phải
                            đi viết css cho nó w100% etc */}
                            <WrapperTippy>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperTippy>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    {isUser ? (
                        <>
                            <>
                                <Tippy delay={[0, 200]} placement="bottom-end" content="Upload">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} placement="bottom-end" content="Inbox">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} placement="bottom-end" content="Notification">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
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
                            <img
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/736x/b2/8c/98/b28c98099e6436b4c6fa95a663aa2b02.jpg"
                                alt="Ben Nguyen"
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
