import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './doctorList.module.scss';
import NextArrow from '~/conponents/arrows/nextBtn';
import PrevArrow from '~/conponents/arrows/prevBtn';

const cx = classNames.bind(styles);

function DoctorList() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow customizeArrow />,
        prevArrow: <PrevArrow />,
    };
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
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img1')}></div>
                        <span className={cx('title')}>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</span>
                        <span className={cx('sub')}>Cơ Xương Khớp</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img2')}></div>
                        <span className={cx('title')}>Bác sĩ Chuyên khoa II Võ Văn Mẫn</span>
                        <span className={cx('sub')}>Cơ Xương Khớp, Chấn thương chỉnh hình</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img3')}></div>
                        <span className={cx('title')}>Thạc sĩ, Bác sĩ Nguyễn Văn Nghị</span>
                        <span className={cx('sub')}>Tiểu đường - Nội tiết, Ung bướu, Tuyến giáp</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img4')}></div>
                        <span className={cx('title')}>Thầy thuốc Ưu tú, Bác sĩ Chuyên khoa II Phạm Huy Huyền</span>
                        <span className={cx('sub')}>Thận - Tiết niệu</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img5')}></div>
                        <span className={cx('title')}>Bác sĩ Chuyên khoa II Kim Văn Trung</span>
                        <span className={cx('sub')}>Cơ Xương Khớp, Nội khoa</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img6')}></div>
                        <span className={cx('title')}>Tiến sĩ, Bác sĩ Lê Đức Tố</span>
                        <span className={cx('sub')}>Cơ Xương Khớp, Cột sống, Chấn thương chỉnh hình</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img7')}></div>
                        <span className={cx('title')}>Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí</span>
                        <span className={cx('sub')}>Cơ Xương Khớp</span>
                    </div>
                    <div className={cx('wrapper-content')}>
                        <div className={cx('img8')}></div>
                        <span className={cx('title')}>Phó giáo sư, Tiến Sĩ, Bác sĩ CK II Nguyên Văn Quýnh</span>
                        <span className={cx('sub')}>Tim mạch</span>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default DoctorList;
