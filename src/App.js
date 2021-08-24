import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjhfMTAx%2FMDAxNjI3NDU5MTc4OTI2.GwoABbBoEbdyZmcGB2M0kFkDvWxIsLU1c8qqWkoh54Ug.DsZHqVA0jCIkRfeOaQRhQYtOy6enQ4WRBRas7rdN0N8g.JPEG.kmy1987%2Foutput_1221887916.jpg&type=sc960_832",
    rating: 4.5,
  },
  {
    id: 2,
    name: "ramen",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDNfMTE5%2FMDAxNjI3OTc4MDE1MTM0.p1zYUU_-s05qdnFm7csDThgJAPiZcfD286amf65H7rUg.bviEdj4DCQlgFGvmo6RtygM4VRnIEBfHwTIxXi5SF8Yg.JPEG.alsrudch%2FIMG_2972.JPG&type=sc960_832",
    rating: 5,
  },
  {
    id: 3,
    name: "samgupsal",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDVfOTgg%2FMDAxNjI4MTczNzQzMjAy.zYd1zoUnnC-IdFlxAFCZ1ySljWZAgxnExexyPk0q-m0g.poBAkfv5S-UbzOXcCwF6GXf4oJVIuCAX3Fa993nbOcsg.PNG.yooonpig%2Fimage.png&type=sc960_832",
    rating: 4.9,
  },
  {
    id: 4,
    name: "jjuggumi",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDNfMTMx%2FMDAxNjI3OTg0NzYzNzgy.AobzpLEo_RNdLp17tkZFuvPcZETRacK4VAL7hTOlJ2kg.uVUWlgs2AQWwhIoT1p4gc1a93WGoz7LhIothY8iXDlkg.JPEG.alfieclements%2F%25C0%25BD%25BD%25C4%25BB%25E7%25C1%25F8_27.jpg&type=sc960_832",
    rating: 5.5,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I LIKE {name} </h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.img}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
