import Header from '~/conponents/Layouts/conponents/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
