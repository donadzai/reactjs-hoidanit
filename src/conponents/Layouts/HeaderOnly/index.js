import Header from '~/conponents/Layouts/conponents/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    );
}

export default HeaderOnly;
