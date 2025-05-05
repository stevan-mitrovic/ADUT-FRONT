import React, {useCallback, useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "./index.scss";
import SliderPrevIcon from "@/ui/icons/slider/sliderPrev";
import SliderNextIcon from "@/ui/icons/slider/sliderNext";

//https://www.embla-carousel.com/

type Params = {
    slideKey: string;
    slides: React.ReactNode[];
}

export function Slider({slideKey, slides = []}: Params) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: 0 })

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if(emblaApi){
            emblaApi.scrollNext()
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if(emblaApi){
            emblaApi.scrollPrev()
        }
    }, [emblaApi])

    return (
        <div className={"slider-container"}>
            <div className={"slider-container__btn"}
                 onClick={() => {scrollPrev()}}>
                <SliderPrevIcon/>
            </div>

            <div className="__embla" ref={emblaRef}>
                <div className="__embla__container">
                    {(slides || []).map((item, key) => <div key={`${slideKey}-${key}`}
                                                            className="__embla__slide">{item}</div>)}
                </div>
            </div>

            <div className={"slider-container__btn"}
                 onClick={() => {scrollNext()}}>
                <SliderNextIcon/>
            </div>
        </div>
    )
}
