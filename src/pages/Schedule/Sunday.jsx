import Container from "react-bootstrap/esm/Container";
import ScheduleList from "./ScheduleList";

export default function Sunday(){
    return(
        <>
        <Container className="py-5">
           <ScheduleList classType={"Fitness"} classTime={"9:00 - 10:00am "} trainerName={"David Phills"}/>
           <ScheduleList classType={"Body Building"} classTime={"10.00am - 11:00am"} trainerName={"John Mathew"}/>
           <ScheduleList classType={"Running"} classTime={"4:00pm - 5:00pm "} trainerName={"Junior Jonas"}/>
           <ScheduleList classType={"Cycling"} classTime={"6:00pm - 7:00pm "} trainerName={"Robert Louis"}/>
        </Container>
        </>
    )
}