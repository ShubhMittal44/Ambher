import React from 'react'
import '../Add to cart modal/Slideshow.css'
import Shoes from '../../assets/images/Shoes.png'

const colors = [Shoes, Shoes, Shoes]
const delay = 5000
const Slideshow = () => {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )
    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className="slideshowDot"
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
