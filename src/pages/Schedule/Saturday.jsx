import Container from "react-bootstrap/esm/Container";
import ScheduleList from "./ScheduleList";

export default function Saturday() {
    return (
        <>
            <Container className="py-5">
                <ScheduleList classType={"Power Lifting"} classTime={"9:00 - 10:00am "} trainerName={"David Laid"} />
                <ScheduleList classType={"Boxing"} classTime={"10.00am - 11:00am"} trainerName={"Tyson Fury"} />
                <ScheduleList classType={"Yoga"} classTime={"4:00pm - 5:00pm "} trainerName={"Milica Tails"} />
            </Container>
        </>
    )
}