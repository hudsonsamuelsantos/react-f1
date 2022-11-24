import styles from "./Calendar.module.css"

import { useState, useEffect } from "react";

import axios from "axios"

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
    const [racesCalendar, setRacesCalendar] = useState([])

    useEffect(() => {
        async function fetch() {
            const url = "https://eowieece7a1eri5.m.pipedream.net"

            const response = await axios.get(url)

            setRacesCalendar(response.data.racesCalendar)
        }

        fetch()
    }, [])

    console.log(racesCalendar)

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
                            {racesCalendar != [] && racesCalendar.map((race, index) => (
                                <SwiperSlide key={index}>
                                    <CalendarCard race={race} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    )
}