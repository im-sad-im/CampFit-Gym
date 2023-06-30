export default function ScheduleList(){
    return(
        <ul className="d-flex justify-content-between list-unstyled">
            <li>
                <p className="subtitle">class Name</p>
                <p> {classType} </p>
            </li>
            <li>
            <p className="subtitle">Time</p>
            <p> {classTime} </p>
            </li>
            <li>
                <p className="subtitle">Trainer</p>
                <p> {trainerName} </p>
            </li>
        </ul>
    )
}