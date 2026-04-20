"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/swiper.css';

import { HeaderSection } from "@/shared/ui/HeaderSection/HeaderSection"
import { IconArrow } from "@/shared/ui/Icons/Icons";
import { useRef, useState } from "react";
import { SliderCard } from "@/shared/ui/SliderCard/SliderCard";
import styles from "./AttendeesSay.module.scss"

import attendeesSayData from "@/shared/data/attendees-say.json"

const AttendeesSay = () => {
    const [_, setInit] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // const swiperSlide = useSwiperSlide();

    return (
        <section className={styles["says-wrap"]}>
            <HeaderSection
                title="What Past Attendees Say"
                className={styles["says__header"]}
            >
                <div className={styles["says__header-buttons"]}>
                    <button ref={prevRef} className={styles["says__header-button"]}><IconArrow /></button>
                    <button ref={nextRef} className={styles["says__header-button"]}><IconArrow /></button>
                </div>
            </HeaderSection>

            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={true}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onInit={() => setInit(true)}
                className={styles["says__slider"]}
                initialSlide={1}
                loop
                breakpoints={{
                    1240: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: false,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }}
            >
                { attendeesSayData.map((item) => (
                    <SwiperSlide>
                        {({ isActive, isNext }) => (
                            <SliderCard 
                                title={item.title}
                                text={item.text}
                                authorImagePath={"/images" + item.authorImagePath}
                                authorName={item.authorName}
                                authorJob={item.authorName}
                                type={isActive ? "active" : isNext ? "next" : "prev"}
                            />
                        )}
                    </SwiperSlide>
                )) }
            </Swiper>
        </section>
    )
}

export default AttendeesSay;