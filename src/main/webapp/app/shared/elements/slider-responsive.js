function responsive(slidesToShow1 = 3, slidesToShow2 = 2, slidesToShow3 = 1) {
  return [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: slidesToShow1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: slidesToShow2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: slidesToShow3,
        slidesToScroll: 1
      }
    }
  ]
}

export default responsive
