import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faColonSign } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import AccountItem from '~/components/AccountItem';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 2000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResults.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div {...attrs} tabIndex={-1} className={cx('search-results')}>
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
                    <Button outline>Log in</Button>
                    <Button rounded>Upload</Button>
                    <Button outline>both</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
