import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

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
function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const onChange = (MenuItem) => {
        console.log(MenuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={onChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
