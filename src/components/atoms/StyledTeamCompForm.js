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

.img {
    position: relative;
    height: 400px;
    object-fit: cover;
    }

.text {
    position: relative;
    height: 400px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 0 30px 0 30px;
    background-color: ${props => props.theme.colors.meCademyLightGrey};
    color: ${props => props.theme.colors.meCademyTextGrey}
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
    height: 250px;
    object-fit: cover;
    }

.text2, .text3 {
    position: relative;
    height: 250px;
    background-color: ${props => props.theme.colors.meCademyLightTeal};
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 12px 0 12px;
    color : ${props => props.theme.colors.meCademyTextGrey}
    }      

.text2:after, .text3:after {
    position: absolute;
    left: -15px;
    top: 100px;
    content: '';
    width: 0;
    height: 0;
    border-right: solid 15px ${props => props.theme.colors.meCademyLightTeal};
    border-bottom: solid 15px transparent;
    border-top: solid 15px transparent;
    }
@media screen and (max-width: 1290px){
    .text2, .text3 {
        font-size: 11px;
    }
    }

@media screen and (max-width: 1250px){

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

    .text2, .text3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
    }

    .text:after {
            display: none;
        }
   }

   @media screen and (max-width: 651px){
        .img {
        width: 100%;
        }

        .text {
        width: 100%;
        padding: 0 30px 0 30px;
        } 

        .text:after, .text2:after, .text3:after {
        display: none;
        }

        .row2, .row3 {
        display: flex;
        flex-direction: column; 
    }

    .text2, .text3 {
        font-size: 14px;
    }
    }`


export default StyledTeamCompForm;