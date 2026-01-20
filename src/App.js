import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { publicRoutes } from './routes';
import { useState, Fragment } from 'react';
import { DefaultLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <h1>Welcome to Ben's project</h1>
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
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
