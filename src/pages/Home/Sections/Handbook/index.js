import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { useRef } from 'react';
import styles from './handbook.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HandBook() {
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
    };
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('header')}>
                    <h2 className={cx('header-title')}>Cẩm nang</h2>
                    <a href="/" className={cx('btn')}>
                        Xem thêm
                    </a>
                </div>
                <div className={cx('slider-wrapper')}>
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        <div className={cx('child')}>
                            <div className={cx('img1')}></div>
                            <div className={cx('title')}>7 Địa chỉ nội soi đại tràng tốt và uy tín ở TP.HCM</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img2')}></div>
                            <div className={cx('title')}>
                                Nội soi dạ dày ở TP.HCM bao nhiêu tiền? Bảng giá tại 6 địa chỉ uy tín
                            </div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img3')}></div>
                            <div className={cx('title')}>Khám trĩ ở đâu? 6 địa chỉ khám và điều trị tốt tại Hà Nội</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img4')}></div>
                            <div className={cx('title')}>8 Bác sĩ chữa bệnh dạ dày giỏi ở TP.HCM</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img5')}></div>
                            <div className={cx('title')}>
                                6 bệnh viện Nhà nước khám chữa bệnh lý về Gan uy tín tại Hà Nội
                            </div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img6')}></div>
                            <div className={cx('title')}>7 Bác sĩ khám Tiêu hóa giỏi ở TP.HCM (Phần 2)</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img7')}></div>
                            <div className={cx('title')}>Cắt trĩ ở đâu tốt tại Hà Nội: Top 6 địa chỉ uy tín</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img8')}></div>
                            <div className={cx('title')}>6 Bác sĩ tiêu hóa Hà Nội giỏi, đáng tin cậy (phần 3)</div>
                        </div>
                    </Slider>

                    <span className={cx('btn-control')}>
                        <div className={cx('btn-wrapper')}>
                            <button className={cx('control')} onClick={previous}>
                                <FontAwesomeIcon className={cx('icon')} icon={faArrowLeft} />
                            </button>
                            <button className={cx('control')} onClick={next}>
                                <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                            </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HandBook;
