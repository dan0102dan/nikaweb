import React from 'react'
import { TbMail, TbMapPinFilled } from 'react-icons/tb'

const Header = ({ email }) => (
    <header className="header">
        <div className="glassContainer glassContainer--header">
            <div className="headerRow">
                <div className="title">
                    Фотостудия <span className="highlight">«НИКА»</span>
                </div>
            </div>
            <div className="content">
                <div className="subtitle">
                    Выездные фотосъёмки в школах и детских садах
                </div>
                <div className="subtitle">
                    <TbMapPinFilled className="icon" id="iconMapPin" />
                    г. Москва и Московская область
                </div>
                <div className="subtitle">
                    <TbMail className="icon" id="iconMail" />
                    <a href={`mailto:${email}`} className="emailLink">
                        {email}
                    </a>
                </div>
            </div>
        </div>
    </header>
)

export default Header
