import { Calendar } from 'antd';

export default function CalendarPage() {
    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    return (<Calendar onPanelChange={onPanelChange} />)

}
