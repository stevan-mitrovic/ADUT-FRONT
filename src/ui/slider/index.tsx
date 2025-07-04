import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./index.scss";
import SliderPrevIcon from "@/ui/icons/slider/sliderPrev";
import SliderNextIcon from "@/ui/icons/slider/sliderNext";
import Typography from "../typography";

//https://www.embla-carousel.com/

type Params = {
  slideKey: string;
  slides: React.ReactNode[];
  noSlidesMessage?: string;
};

export function Slider({
  slideKey,
  slides = [],
  noSlidesMessage = "Nema podataka",
}: Params) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: 0 });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  return (
    <div className={"slider-container"}>
      {slides?.length > 0 ? (
        <>
          <div
            className={"slider-container__btn"}
            onClick={() => {
              scrollPrev();
            }}
          >
            <SliderPrevIcon />
          </div>

          <div className="__embla" ref={emblaRef}>
            <div className="__embla__container">
              {(slides || []).map((item, key) => (
                <div key={`${slideKey}-${key}`} className="__embla__slide">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className={"slider-container__btn"}
            onClick={() => {
              scrollNext();
            }}
          >
            <SliderNextIcon />
          </div>
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="p2" textAlign="center">
            {noSlidesMessage}
          </Typography>
        </div>
      )}
    </div>
  );
}
