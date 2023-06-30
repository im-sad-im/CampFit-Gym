import Container from "react-bootstrap/esm/Container";
import ScheduleList from "./ScheduleList";

export default function Friday() {
    return (
        <>
            <Container className="py-5">
                <ScheduleList classType={"Crossfit"} classTime={"9:00 - 10:00am "} trainerName={"Mike Mich"} />
                <ScheduleList classType={"Karate"} classTime={"10.00am - 11:00am"} trainerName={"John Jones"} />
                <ScheduleList classType={"Meditation"} classTime={"4:00pm - 5:00pm "} trainerName={"Lara Croft"} />
                <ScheduleList classType={"Workout"} classTime={"6:00pm - 7:00pm "} trainerName={"Lary Wheels"} />
            </Container>
        </>
    )
}