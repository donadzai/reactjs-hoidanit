import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { useRef } from 'react';
import styles from './liveHealthy.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LiveHealthy() {
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
                    <h2 className={cx('header-title')}>Sống khỏe suốt đời</h2>
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
                            <div className={cx('title')}>
                                Cảnh giác với dấu hiệu đau bụng quanh rốn âm ỉ bạn không nên bỏ qua
                            </div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img2')}></div>
                            <div className={cx('title')}>
                                Đau xương ức là bệnh gì? Tìm hiểu triệu chứng đau xương ức
                            </div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img3')}></div>
                            <div className={cx('title')}>Cách trị đau xương ức. Làm gì khi bị đau xương ức?</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img4')}></div>
                            <div className={cx('title')}>Tìm hiểu nguyên nhân gây thiểu sản men răng</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img5')}></div>
                            <div className={cx('title')}>Giải đáp: Thiểu sản men răng có điều trị được không?</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img6')}></div>
                            <div className={cx('title')}>Mách bạn cách xử trí khi bị say nắng và say nóng</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img7')}></div>
                            <div className={cx('title')}>Những điều bạn cần biết về say nắng và say nóng</div>
                        </div>

                        <div className={cx('child')}>
                            <div className={cx('img8')}></div>
                            <div className={cx('title')}>Nhận biết các dấu hiệu say nắng và say nóng thường gặp</div>
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

export default LiveHealthy;
