import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const MovieDetail = ({ movie }) => {
  const { image, name, description } = movie;

  return (
    <Col md='5' className='m-1'>
      <Card>
        <CardImg top src={image} alt={name} width='200px' height='450px' />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MovieDetail;
