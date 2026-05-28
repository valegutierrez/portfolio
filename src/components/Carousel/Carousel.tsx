import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps {
  slides: string[];
}

function Carousel(props: CarouselProps) {
  const {slides} = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            { slides.map((slide, i) => (
              <img  key={i} className="embla__slide full-img" src={slide} />
            ))
            }
        </div>
      </div>

      <div className="embla__buttons">
        <button className="button embla__prev" onClick={goToPrev}>
          <i className="ri-arrow-left-line"></i>
        </button>
        <button className="button embla__next" onClick={goToNext}>
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  )
}

export default Carousel;