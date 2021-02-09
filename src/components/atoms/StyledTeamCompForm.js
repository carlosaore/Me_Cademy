import styled from 'styled-components';

const StyledTeamCompForm = styled.div `

margin-bottom: 50px;

.bottom-row {
    display: flex;
    justify-content: center;
}

.row1 {
    display: flex;
    justify-content: center;
    }

.row2, .row3 {
    display: flex;
    }

img {
    width: 520px;
    height: 400px;
    object-fit: cover;
    }

.text {
    position: relative;
    width: 520px;
    height: 400px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 0 30px 0 30px;
    background-color: #f5f5f5;
    }   

.text:after {
    position: absolute;
    left: -20px;
    top: 180px;
    content: '';
    width: 0;
    height: 0;
    border-right: solid 20px #f5f5f5;
    border-bottom: solid 20px transparent;
    border-top: solid 20px transparent;
    }

.img2, .img3 {
    width: 260px;
    height: 250px;
    object-fit: cover;
    }

.text2, .text3 {
    position: relative;
    width: 260px;
    height: 250px;
    background-color: #cbf1f1;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px 0 30px;
    }      

.text2:after, .text3:after {
    position: absolute;
    left: -15px;
    top: 100px;
    content: '';
    width: 0;
    height: 0;
    border-right: solid 15px #cbf1f1;
    border-bottom: solid 15px transparent;
    border-top: solid 15px transparent;
    }

@media screen and (max-width: 1039px){

    .row1 {
        display: flex;
        flex-wrap: wrap;
    }

    .row2, .row3 {
        display: flex; 
    }

    .bottom-row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text2, .text3{
        padding: 0 30px 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text:after {
            display: none;
        }
   }

   @media screen and (max-width: 539px){
        img {
        width: 100%;
        height: 400px;
        padding: 0 5px 0 5px;
        }

        .text {
        width: auto;
        height: 400px;
        padding: 0 30px 0 30px;
        margin: 0 5px 0 5px;
        } 

        .text:after, .text2:after, .text3:after {
        display: none;
        }

        .row2, .row3 {
        display: flex;
        flex-direction: column; 
    }
    }`


export default StyledTeamCompForm;