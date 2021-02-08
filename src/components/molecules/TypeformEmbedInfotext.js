import styled from 'styled-components';
import TypeformRight from '../organism/reg_form';

const BoxAroundTypeform = styled.div`
  height: 500px;
  width: 80%;
  margin: auto;
  display: block;
  position: relative;
  background-color: lightgrey;
  /* border: 1px solid black; */
  margin-bottom: 50px;
`;

const TextBoxForm = styled.div`
    height: 100px;
    width: 80%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    display: block;
    position: relative;
    background-color: "white";
    text-align: center;
    /* border: 1px solid black; */
`;

const RegDivOnPage = styled.div`
  border: 3px solid #e95160;
  height: 250px;
  width: 80%;
  margin: auto;
  margin-top: 0px;
  padding-top: 200px;
  display: block;
  position: relative;
  background-color: lightgrey;
`;

const TypeformEmbedInfotext = () => {
    return (
        <div>
            <BoxAroundTypeform>
              <TextBoxForm><p>Chocolate bar sweet powder gummi bears dessert macaroon fruitcake. Caramels donut macaroon. Marzipan soufflé tart bonbon sweet cupcake.</p></TextBoxForm>
                <RegDivOnPage>
                  <TypeformRight />
                </RegDivOnPage>
            </BoxAroundTypeform>
        </div>
    )
}

export default TypeformEmbedInfotext;