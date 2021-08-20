import React from 'react';

function Header() {
    return (
        <>
            <div className='header'>
                <img src="#" alt="LOGO"/>
                <div className="header-icon">
                    <i className="fa fa-cog fa-fw"
                   aria-hidden="true"/>
                    <p>Settings</p>
                </div>
            </div>
        </>
    );
}

export default Header