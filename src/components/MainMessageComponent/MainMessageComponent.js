import { Card } from "react-bootstrap"
import "./MainMessageComponent.css"

function MainMessageComponent() {
    return (
        <Card className="p-5">
            <Card.Body>
                <Card.Title><h2>What is Greencan</h2></Card.Title>
                <Card.Text>
                    GreenCan: is an organizational management platform designed to  sustainable waste disposal, recycling, and environmental awareness. It provides smart solutions to reduce pollution, encourage responsible waste sorting, and connect users with eco-friendly disposal services.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MainMessageComponent