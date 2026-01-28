import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as WrapperTippy } from '~/components/Popover';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);

function Menu({ children, items, hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; //luôn luôn render page cuối cùng

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
    //click nút quay lại của page thứ 2 trở đi
    const handleBack = () => {
        history.pop();
        setHistory([...history]);
    };
    //render ra box custom
    const renderResult = (attrs) => {
        <div {...attrs} tabIndex={-1} className={cx('menu-list')}>
            <WrapperTippy className={cx('menu-popover')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </WrapperTippy>
        </div>;
    };
    //hover ra ngoài thì reset về page đầu tiên của history
    const handleResetMenu = () => {
        setHistory((prev) => [prev[0]]);
    };
    return (
        <Tippy
            interactive
            offset={[12, 8]}
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
