import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);

function Menu({ children, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const hasSubMenu = !!item.children;
            const handleSubmenu = () => {
                if (hasSubMenu) {
                    setHistory((prev) => [...prev, item.children]);
                } else {
                    onChange(item);
                }
            };
            return <MenuItem key={index} item={item} onClick={handleSubmenu}></MenuItem>;
        });
    };

    const handleBack = () => {
        history.pop();
        setHistory([...history]);
    };

    return (
        <Tippy
            interactive
            offset={[12, 8]}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div {...attrs} tabIndex={-1} className={cx('menu-list')}>
                    <WrapperTippy className={cx('menu-popover')}>
                        {history.length > 1 && <Header title="Language" onBack={handleBack} />}
                        {renderItems()}
                    </WrapperTippy>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => [prev[0]]);
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
