import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Button"; // Using the vanilla Button we made earlier

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = React.forwardRef(({ 
  orientation = "horizontal", 
  opts, 
  setApi, 
  plugins, 
  className, 
  children, 
  ...props 
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins);

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => api?.off("select", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider value={{
      carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext,
    }}>
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        className={`carousel carousel-${orientation} ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="carousel-viewport">
      <div ref={ref} className={`carousel-content ${className || ""}`} {...props} />
    </div>
  );
});

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} role="group" aria-roledescription="slide" className={`carousel-item ${className || ""}`} {...props} />
));

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={`carousel-btn carousel-prev ${className || ""}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft size={16} />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={`carousel-btn carousel-next ${className || ""}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight size={16} />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };