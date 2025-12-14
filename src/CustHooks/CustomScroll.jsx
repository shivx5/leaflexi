const [disableLeft, setDisableLeft] = useState(false);
const [disableRight, setDisableRight] = useState(true);
const scroll = (direction, scrollRef) => {
  // console.log(direction);
  if (scrollRef.current) {
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(() => {
      checkScroll();
    }, 100);
  }
};

const checkScroll = () => {
  // console.log(scrollRef.current);
  if (scrollRef.current) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    // console.log(scrollLeft, scrollWidth, clientWidth);
    setDisableLeft(scrollLeft <= 0);
    setDisableRight(scrollLeft + clientWidth >= scrollWidth - 90);
    // console.log(disableLeft, disableRight);
  }
};
