import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    // const timerID = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 2000);
    }, []);

    // const handleTyping = (e) => {
    //     if(timerID) clearTimeout(timerID)
    //     setSearchValue(e.target.value);
    //     setTimeout(() => {
    //         callingAPI()

    //         setData(data)
    //     }, 300);
    // };
    return (
        <TippyHeadless
            visible={searchResults.length > 1 && isFocus}
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
            onClickOutside={() => setIsFocus(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onFocus={() => setIsFocus(true)}
                />
                {searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}
export default Search;
