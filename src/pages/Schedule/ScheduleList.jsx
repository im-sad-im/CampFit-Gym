export default function ScheduleList({classType, classTime, trainerName}) {
    return (
        <ul className="d-flex justify-content-between list-unstyled w-100 schedule-list" style={{backgroundColor: "#211F1F"}}>
            <li className="w-100 text-center py-4">
                <p className="subtitle">class Name</p>
                <p> {classType} </p>
            </li>
            <li className="w-100 text-center py-4">
                <p className="subtitle">Time</p>
                <p> {classTime} </p>
            </li>
            <li className="w-100 text-center py-4">
                <p className="subtitle">Trainer</p>
                <p> {trainerName} </p>
            </li>
            <li className="w-100 text-center py-5">
                <button className="btn-main my-btn px-5"> Join us</button>
            </li>
        </ul>
    )
}