import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './doctorList.module.scss';
import NextArrow from '~/conponents/arrows/nextBtn';
import PrevArrow from '~/conponents/arrows/prevBtn';
import { getTopDoctors } from '~/redux/getTopDoctor/actions';

const cx = classNames.bind(styles);

function DoctorList() {
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const dispatch = useDispatch();

    const topDoctors = useSelector((state) => state.getTopDoctors.listTopDoctors);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: false,
        afterChange: function (index) {
            console.log(index);

            if (index === 0) {
                setDisablePrev(true);
            } else if (index === 8) {
                setDisableNext(true);
            } else {
                setDisablePrev(false);
                setDisableNext(false);
            }
        },

        nextArrow: <NextArrow disableNext={disableNext} customizeArrow />,
        prevArrow: <PrevArrow disablePrev={disablePrev} />,
    };

    useEffect(() => {
        dispatch(getTopDoctors());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('header')}>
                    <h2 className={cx('header-title')}>Bác sĩ nổi bật</h2>
                    <a href="/" className={cx('header-btn')}>
                        Xem thêm
                    </a>
                </div>
                <Slider {...settings}>
                    {topDoctors &&
                        topDoctors.length > 0 &&
                        topDoctors.map((doctor, index) => {
                            return (
                                <div key={index} className={cx('wrapper-content')}>
                                    <div
                                        style={{ backgroundImage: `url(${doctor.image})` }}
                                        className={cx('img')}
                                    ></div>
                                    <span className={cx('title')}>
                                        {doctor.Allcode.valueVi}, {doctor.lastName} {doctor.firstName}
                                    </span>
                                    <span className={cx('sub')}>Cơ Xương Khớp</span>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </div>
    );
}

export default DoctorList;
