import Icon from "../../icons/Icon"

const SettingsDropdown = () => {
    return (
        <div className='settings-dropdown' onClick={(e)=>e.stopPropagation()}>
            <ul className="border-bottom-box">
                <li className='grid-column-3'>
                        <Icon name="shield" />
                        <p>Your Data in YouTube</p>
                    </li>
            </ul>
            <ul className='border-bottom-box'>
                <li className='grid-column-3'>
                    <Icon name="mode_night" />
                    <p>Appearance: Device theme</p>
                    <Icon name="navigate_next" />
                </li>
                <li className='grid-column-3'>
                    <Icon name="translate" />
                    <p>Language: English</p>
                    <Icon name="navigate_next" />
                </li>
                <li className='grid-column-3'>
                    <Icon name="admin_panel_settings" />
                    <p>Restricted Mode: Off</p>
                    <Icon name="navigate_next" />
                </li>
                <li className='grid-column-3'>
                    <Icon name="language" />
                    <p>Location: United States</p>
                    <Icon name="navigate_next" />
                </li>
                <li className='grid-column-3'>
                    <Icon name="keyboard" />
                    <p>Keyboard shortcuts</p>
                </li>
            </ul>
            <ul className='border-bottom-box'>
                <li className='grid-column-3'>
                    <Icon name="settings"/>
                    <p>Settings</p>
                </li>
            </ul>
            <ul className="padding-box">
                <li className='grid-column-3'>
                    <Icon name="help" />
                    <p>Help</p>
                </li>
                <li className='grid-column-3'>
                    <Icon name="sms_failed" />
                    <p>Send feedback</p>
                </li>
            </ul>
        </div>
    )
}

export default SettingsDropdown