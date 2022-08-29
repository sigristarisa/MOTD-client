import React, { useState, useEffect } from "react";
import "./Randomizer.css";

const ImageSlideShow: React.FC = () => {
  const [mayoImgId, setMayoImgId] = useState<number>(1);

  const getRandomMayoImgId = (): void => {
    const maxMayoId = 100;
    const minMayoId = 1;
    const randomMayoId: number = Math.floor(
      Math.random() * (maxMayoId - minMayoId) + minMayoId
    );

    setMayoImgId(randomMayoId);
  };

  useEffect(() => {
    const randomizeMayoImgId: ReturnType<typeof setInterval> = setInterval(
      getRandomMayoImgId,
      100
    );
    setTimeout(() => clearInterval(randomizeMayoImgId), 3500);
  }, []);

  return (
    <div className='mayonnaise-img_container place-items_center'>
      <img
        src={require(`../../assets/mayo-image/image_mayonnaise${mayoImgId}.png`)}
        alt='mayo img'
        className='mayonnaise_img'
      />
    </div>
  );
};

export default ImageSlideShow;
