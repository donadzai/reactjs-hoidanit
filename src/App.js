import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

function App() {
    const isLang = useSelector((state) => state.changLang.isChangLang);
    let locale;
    if (isLang) {
        locale = LOCALES.ENGLISH;
    } else {
        locale = LOCALES.VIETNAMESE;
    }
    return (
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
            <Router>
                <div className="app">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else {
                                Layout = Fragment;
                            }

                            const Page = route.element;

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
                </div>
            </Router>
        </IntlProvider>
    );
}

export default App;
