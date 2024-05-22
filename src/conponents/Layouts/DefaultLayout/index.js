import Header from '~/conponents/Layouts/conponents/Header';
import Footer from '~/conponents/Layouts/conponents/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
