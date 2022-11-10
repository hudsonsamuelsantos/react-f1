import styles from "./Calendar.module.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/scrollbar";

import { Autoplay, Scrollbar } from "swiper"

import CalendarBahrainFlag from "../assets/bahrain_70_x_47.png"
import CalendarSpainFlag from "../assets/spain_70_x_47.png"
import CalendarFranceFlag from "../assets/france_70_x_47.png"
import CalendarBelgiumFlag from "../assets/belgium_70_x_47.png"
import CalendarItalyFlag from "../assets/italy_70_x_47.png"
import CalendarJapanFlag from "../assets/japan_70_x_47.png"
import CalendarEuaFlag from "../assets/eua_70_x_47.png"
import CalendarAustriaFlag from "../assets/austria_70_x_47.png"
import CalendarSaudiArabiaFlag from "../assets/saudi_arabia_70_x_47.png"

import { CalendarCard } from "../components/CalendarCard"

export function Calendar() {
    return (
        <div className={styles.CalendarBox}>
            <div className={styles.Calendar}>
                <div className={styles.CalendarSwiperView}>
                    <>
                        <Swiper
                            modules={[Scrollbar, Autoplay]}
                            slidesPerView={6.5}
                            className="mySwiper"
                            spaceBetween={0}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarBahrainFlag}
                                    countryName="BAHRAIN"
                                    day="10"
                                    mounth="APR"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarBahrainFlag}
                                    countryName="BAHRAIN"
                                    day="20"
                                    mounth="APR"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarSpainFlag}
                                    countryName="SPAIN"
                                    day="24"
                                    mounth="MAY"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarFranceFlag}
                                    countryName="FRANCE"
                                    day="31"
                                    mounth="JUL"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarBelgiumFlag}
                                    countryName="BELGIUM"
                                    day="28"
                                    mounth="AUG"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarItalyFlag}
                                    countryName="ITALY"
                                    day="04"
                                    mounth="SEP"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarJapanFlag}
                                    countryName="JAPAN"
                                    day="11"
                                    mounth="SEP"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarEuaFlag}
                                    countryName="EUA"
                                    day="13"
                                    mounth="SEP"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarAustriaFlag}
                                    countryName="AUSTRIA"
                                    day="21"
                                    mounth="SEP"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <CalendarCard
                                    countryImage={CalendarSaudiArabiaFlag}
                                    countryName="SAUDI ARABIA"
                                    day="27"
                                    mounth="SEP"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    )
}