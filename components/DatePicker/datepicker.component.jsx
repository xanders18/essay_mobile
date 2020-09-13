import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { color } from '../../constant/color'

const DatePicker = props => {
    return (
        props.show &&
        <DateTimePicker
            style={props.style}
            testID="dateTimePicker"
            value={new Date(Date.now())}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={props.handler}
        />
    )
}


export default DatePicker