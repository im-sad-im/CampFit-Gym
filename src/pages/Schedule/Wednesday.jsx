import Container from "react-bootstrap/esm/Container";
import ScheduleList from "./ScheduleList";

export default function Wednesday() {
    return (
        <>
            <Container className="py-5">
                <ScheduleList classType={"Cycling"} classTime={"9:00 - 10:00am "} trainerName={"Mario Vreco"} />
                <ScheduleList classType={"Body Building"} classTime={"10.00am - 11:00am"} trainerName={"John Mathew"} />
                <ScheduleList classType={"Fitness"} classTime={"4:00pm - 5:00pm "} trainerName={"Tom Rizzly"} />
                <ScheduleList classType={"Running"} classTime={"6:00pm - 7:00pm "} trainerName={"Michael Hardy"} />
            </Container>
        </>
    );
}