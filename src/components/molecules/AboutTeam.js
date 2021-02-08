import React from 'react';
import styled from 'styled-components';
import StyledTeamCompForm from '../atoms/StyledTeamCompForm';

const AboutTeam = () => {
    return (
        <StyledTeamCompForm>
            <div className="row1">
                <img 
                className="img"
                src="/images/female-placeholder.png"
                atl="Girl loves t-shirt"/>
                <div className="text">
                    <h1>Jane Doe</h1>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                </div>

            <div className="row2">
                <img 
                className="img2"
                src="/images/female-placeholder.png"
                atl="Girl in a jacket"/>  
                <div className="text2">
                    <h1>Jane Doe</h1>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                <img 
                className="img3"
                src="/images/female-placeholder.png"
                atl="Girl with a car"/>
                <div className="text3">
                    <h1>Jane Doe</h1>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
            </div>
        </StyledTeamCompForm>
    )
}

export default AboutTeam;