import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import searchService from '~/ApiServices/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 500);

    const handleTyping = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
        if (e.target.value === '') {
            setSearchResults([]);
        }
    };
    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handleSearchData = (data) => {
        const processedValue = debounceValue.toLowerCase().trim();
        let matchedUsers;
        if (processedValue === '') {
            matchedUsers = [];
        } else {
            matchedUsers = Array.from(
                data.filter((user) => {
                    return user.name.toLowerCase().includes(processedValue);
                }),
            );
        }
        const fiveUsers = matchedUsers.length > 5 ? matchedUsers.splice(0, 5) : matchedUsers;
        setSearchResults([...fiveUsers]);
        setIsLoading(false);
    };

    useEffect(() => {
        if (debounceValue === '') return;
        searchService().then((data) => handleSearchData(data)); //tách service search
    }, [debounceValue]);
    return (
        <TippyHeadless
            visible={searchResults.length > 0 && isFocus}
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <div {...attrs} tabIndex={-1} className={cx('search-results')}>
                    {/* tạo riêng là để viết css cho thằng .wrapper, không thì mỗi lần tạo 1 drop như này sẽ phải
                            đi viết css cho nó w100% etc */}
                    <WrapperTippy>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((result) => {
                            return <AccountItem result={result} key={result.id} />;
                        })}
                    </WrapperTippy>
                </div>
            )}
            onClickOutside={() => setIsFocus(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => handleTyping(e)}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onFocus={() => setIsFocus(true)}
                />
                {searchValue && isLoading === false && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {isLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}
export default Search;
