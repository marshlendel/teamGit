import React, {useState} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Fade
} from 'reactstrap';

const LocalCard = (props) => {
    const [fadeIn, SetFadeIn] = useState(true);
    
    const toggle = () => SetFadeIn(!fadeIn);
    let url = `https://api.nasa.gov/planetary/earth/assets?lon=86.1582&lat=39.7684&api_key=K5Qj4Lirdyg9EDl2m1rZL3yfR5vsc2jKbgFoNArn`
fetch(url)
  .then(res => res.json())
  .then(json => json.url)

return (
    <div className="container">
    <Card>
        <CardImg top width="100%" src="" alt="Satellite Image" />
            <CardBody>
                    <CardTitle tag="h5">Music Events</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Local Weather</CardSubtitle>
                    <Button color="primary" onClick={toggle}>Fahrenheit</Button>
                    <Button color="primary" onClick={toggle}>Celcius</Button>
                    <Fade in={fadeIn} tag="h5" className="mt-3">
                        This content will fade in and out as the button is pressed
                    </Fade>
                    <CardText>Events in the area</CardText>
            </CardBody>
    </Card>
    </div>
  );
};

export default LocalCard;

