import { css } from "lit";

export const styles = css`
:host {
    display: block;
    width: 100%;
    height: 100%;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 1;
}

.principal-div {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: rgba(0, 0, 255, 0.5);
}

.modal {
    width: 50%;
    height: 50%;
    background-color: rgba(173, 216, 230, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 6px solid yellow;
    border-radius: 30px;
    z-index: 0;
}

.buttom {
    position: absolute;
    top: 10%;
    right: 5%;
    border-radius: 30px;
    width: 7%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
    border: 2px solid #0056b3;
    color: white;
    font-size: 12px;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 5%;
    max-width: 80%;
    word-wrap: break-word;
    text-align: center;
}

.banner {
    width: 30%;
    height: 30vh;
    border: 2px solid #0056b3;
    position: absolute;
    top: 32%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    text-align: center;
    border: 6px solid white;
    border-radius: 30px;
    font-size: 20px;
    background-color: white;
}

.banner-buttom-right {
    position: absolute;
    bottom: 5%;
    right: 5%;
    border-radius: 30px;
    width: 15%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
    border: 2px solid #0056b3;
    color: white;
    font-size: 12px;
}

.banner-buttom-left {
    position: absolute;
    bottom: 5%;
    right: 22%;
    border-radius: 30px;
    width: 15%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
    border: 2px solid #0056b3;
    color: white;
    font-size: 12px;
}

@media (max-width: 1280px) {
  .modal {
    width: 80%;
    height: 70%;
  }

  .title {
    font-size: 50px;
    padding-top: 10%;
    font-weight: bold;
  }

  .buttom {
    width: 15%;
    height: 8%;
    top: 5%;
    right: 4%;
  }

  .buttom svg {
    width: 80%;
    height: 80vh;
  }

  .banner {
    width: 80%;
    height: 30vh;
    border: 2px solid #0056b3;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    text-align: center;
    border: 6px solid white;
    border-radius: 30px;
    font-size: 40px;
    font-weight: bold;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .titleBanner {
    font-size: 80px;
  }

  .banner-buttom-right { 
    width: 20%; 
    height: 20%; 
    font-size: 40px;
    margin-right: 50%;
  }

  .banner-buttom-left { 
    width: 20%; 
    height: 20%;
    font-size: 40px;
  }
}
`;
