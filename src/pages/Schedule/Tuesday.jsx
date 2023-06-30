import Container from "react-bootstrap/esm/Container";
import ScheduleList from "./ScheduleList";

export default function Tuesday() {
    return (
        <>
            <Container className="py-5">
                <ScheduleList classType={"Boxing"} classTime={"9:00 - 10:00am "} trainerName={"Mike Tyson"} />
                <ScheduleList classType={"Yoga"} classTime={"10.00am - 11:00am"} trainerName={"Karie Johnson"} />
                <ScheduleList classType={"Crossfit"} classTime={"4:00pm - 5:00pm "} trainerName={"Drake Ramoray"} />
            </Container>
        </>
    );
}