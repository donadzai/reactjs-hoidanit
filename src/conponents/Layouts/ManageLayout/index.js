import ManageHeader from '../conponents/ManageHeader';

function ManageLayout({ children }) {
    return (
        <>
            <ManageHeader />
            <div>{children}</div>
        </>
    );
}

export default ManageLayout;
