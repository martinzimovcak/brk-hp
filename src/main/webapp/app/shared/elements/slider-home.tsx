import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./homeslider.css";


interface ISliderContent {
  image: string;
  title: string;
  description: string;
  button?: string;
  user?: string;
  userProfile?: string;
}

const content: ISliderContent[] = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];


interface ISliderHomeProps {
  content: ISliderContent[];
  buttonText: string;
  hideButton?: boolean;
  show2Button?: boolean;
  button2Text: string;
  contentWrapperClass: string;
  buttonClass: string;
}

const SliderHome = (props: ISliderHomeProps) => {

  const sliderContent = props.content || content
  const {buttonText, hideButton, show2Button, button2Text, contentWrapperClass} = props
  const contentCls = contentWrapperClass || ""
  const buttonClass = props.buttonClass || ""

  return (
    <>
      <Slider className="slider-wrapper home-slider2">
        {sliderContent.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{background: `url('${item.image}') no-repeat center center`}}
          >
            <div className={`inner ${contentCls}`}>

              {item.title && <h1>{item.title}</h1>}
              {item.description && <p>{item.description}</p>}


              {hideButton ? "" : show2Button ? (
                <>
                  <button className={buttonClass}>{buttonText}</button>
                  <button className={buttonClass}>{button2Text}</button>
                </>
              ) : (
                <button className={buttonClass}>{buttonText}</button>
              )
              }
            </div>
          </div>
        ))}
      </Slider>

    </>
  )
}
export default SliderHome;
