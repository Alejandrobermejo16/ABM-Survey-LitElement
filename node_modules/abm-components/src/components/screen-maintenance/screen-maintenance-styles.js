import { css } from 'lit';

export const styles = css`
.screen-director {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1c7dc9;
}
.central-square {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 4px solid #fff;
  border-radius: 7%;
  width: 50%;
  height: 50vh;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px;
  border-bottom: 2px solid white;
}
.header-text {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5%;
  padding: 10px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: start;
}
.header p {
  font-weight: bold;
  font-size: 1.2em;
  margin: 0;
}
.body {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-image: url("https://st2.depositphotos.com/1823350/10260/v/450/depositphotos_102609836-stock-illustration-computer-service-man-repairing-computer.jpg");
  background-position: center;
  background-repeat: no-repeat;
}
.body img {
  max-width: 45%;
  height: auto;
}
.spinner {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 8px solid white;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 20px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.text-spinner {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1280px) {
  .central-square {
    padding: 1%;
    width: 90%;
    height: 60vh;
  }
  .header p {
    font-size: 55px;
  }
  .body {
    flex-direction: column;
  }
  .body img {
    display: none;
  }
  .text-spinner h2 {
    font-size: 60px;
    display: flex;
    flex-direction: row;
    margin-left: 9%;
  }
    .header{
     padding-top: 20%
    }
     .header-text{
       margin-bottom: 10%;
     }
  .spinner {
    margin-top: 10%;
    margin-right: 13%;
    width: 60px;
    height: 50px;
  }
}
`;
