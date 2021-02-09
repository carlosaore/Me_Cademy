import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import TypeformButton from '../atoms/TypeformButton';


class Popup extends React.Component {

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://karinheinzl.typeform.com/to/N75W9teT"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <TypeformButton className="btn" onClick={()=>this.openForm()} style={{ cursor: 'pointer' }}>
          Anmeldung
        </TypeformButton>
      </div>
    );
  }
}

export default Popup;