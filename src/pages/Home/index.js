import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '~/redux/getUser/actions';
import styles from './home.module.scss';
import Banner from './Banner';
import Loader from '~/conponents/loader';
import SpecialtySlider from './Sections/SpecialtySlider/specialty';
import Hospital from './Sections/Hospital';
import ForYou from './Sections/ForYou';
import ServiceSection from './Sections/ServiceSection';
import DoctorList from './Sections/DoctorList';
import RemoteExamination from './Sections/RemoteExamination';
import Suggestion from './Sections/Suggestion';
import MentalHealth from './Sections/MentalHealth';
import Answerd from './Sections/Answerd';
import HandBook from './Sections/Handbook';
import LiveHealthy from './Sections/LiveHealthy';
import Information from './Sections/Informations';

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();

    const isStarting = useSelector((state) => state.getUser.isStarting);

    const isRequestCreate = useSelector((state) => state.createNewUser.isReaquestCreate);

    const isRequestEdit = useSelector((state) => state.editUserFromReducer.isRequestEdit);

    const isRequestDelete = useSelector((state) => state.deleteUserReducer.isRequestDelete);

    useEffect(() => {
        dispatch(getUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const childFunc = useRef(null);
    // const handleFillInfo = (id) => {
    //     const userNeedEdit = listUser.filter((item) => {
    //         return item.id === id;
    //     });

    //     childFunc.current(userNeedEdit);
    // };

    return (
        <>
            <div className={cx('banner-container')}>
                {(isStarting || isRequestCreate || isRequestEdit || isRequestDelete) && <Loader />}

                <div className={cx('banner-content')}>
                    <Banner />
                    <ForYou />
                    <ServiceSection />
                    <SpecialtySlider />
                    <Hospital />
                    <DoctorList />
                    <RemoteExamination />
                    <Suggestion />
                    <MentalHealth />
                    <Answerd />
                    <HandBook />
                    <LiveHealthy />
                    <Information />
                </div>
            </div>
        </>
    );
}

export default Home;
