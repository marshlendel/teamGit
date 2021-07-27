import React, {useState} from 'react';
import {
    Card, CardImg, Button, Fade, CardText, CardBody, CardTitle, Row, Col
} from 'reactstrap';
const LocalCard = () => {
    const [nasaImage, setNasaImage] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")
    const [celsius, setCelsius] = useState("")
    const [fadeIn, SetFadeIn] = useState(true);
    const toggle = () => SetFadeIn(!fadeIn);
    const [fadeIn2, SetFadeIn2] = useState(true);
    const toggle2 = () => SetFadeIn2(!fadeIn2);
    let [latitude, setLatitude] = useState("")
    let [longitude, setLongitude] = useState("")
    let [musicEvents, setMusicEvents] = useState("")
    let [eventList, setEventList] = useState("")
    navigator.geolocation.getCurrentPosition(position => {
        setLatitude(latitude = position.coords.latitude)
        setLongitude(longitude = position.coords.longitude)
    })
    let handleFetches = () => {
        let eventUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=IM4W7XUbX6tJtHFlGOFWDykDTAggP1J9&latlong=39.7684,-86.1581&classificationName=music&sort=distance,asc&size=10`  
        fetch(eventUrl)
            .then(res => res.json())
            .then(json => {
                setMusicEvents(json._embedded)
                setEventList(musicEvents.events.map(events => events.name))
            })
            .catch((err) => console.log(err))
        let url = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&api_key=oab2ASNCJF3hsBZYuUrhxyRlWtYbdxNI8XMUpnfx`
        fetch(url)
            .then(res => res.json())
            .then(json => setNasaImage(json.url))
            .catch(err => console.log(err))
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c1c1d67fc5e9c9e8943ff91ebfee1f10
            `
        fetch(weatherUrl)
            .then(res => res.json())
            .then(json => {
                setFahrenheit(Math.floor(1.8 * (json.main.temp - 273) + 32))
                setCelsius(Math.floor(json.main.temp - 273))
            })
            .catch(err => console.log(err))
        }

return (
    <div className="container">
    <Card className="card-container" >
        <CardImg className="card-img" top width="100%" src= {nasaImage} alt="Satellite Image" />
            <CardBody>
                    <Button color="dark" onClick={handleFetches}>Get Local Info!</Button >
                    <Row>
                    <Col md="6">
                    <Button color="dark" onClick={toggle2}>Fahrenheit</Button>
                    <Fade in={fadeIn2} tag="h5" className="mt-3">
                        <p>{fahrenheit}</p>
                    </Fade>
                    </Col>
                    <Col md="6">
                    <Button color="dark" onClick={toggle}>Celsius</Button>
                    <Fade in={fadeIn} tag="h5" className="mt-3">
                        <p>{celsius}</p>
                    </Fade>
                    </Col>
                    </Row>
                    <CardTitle tag="h5"><b>Music Events Near Me: </b></CardTitle>
                    <CardText><div>{eventList}</div></CardText>
            </CardBody>
    </Card>
    </div>
    )
}
export default LocalCard;
