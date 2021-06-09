import React, { useState } from 'react'
import moment from 'moment-timezone'
import './datepicker.scss'


export default function Datepicker({ startDate = moment().format('YYYY-MM-DD'), onChange }) {

    return (
        <div className="datepicker">
            <input
                type="date"
                value={moment(startDate).format('YYYY-MM-DD')}
                onChange={onChange}
            />
        </div>
    )
}