import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { RatingStar } from "rating-star";
import { ListGroup } from 'react-bootstrap'

// import fontawesome from '@fortawesome/fontawesome'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import  '@fortawesome/fontawesome-free-solid'
const Preview = () => {
	const location = useLocation();
//   const [id,setid] = useState(location.state.previewId);	
	const [service, setServie] = useState(location.state.previewService);

	useEffect(() => {
        document.title=service.name
    })

  return (
	<div className='mx-auto mt-5 d-flex flex-row justify-content-around'>
	<Card style={{ width: '50rem' }}>
		<Card.Body>
			<Card.Title>{service.name}</Card.Title>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>Code : {service.serviceDescriptor.serviceName}</ListGroup.Item>
				<ListGroup.Item className='font-weight-bold'>Price : {service.Orderprice} INR</ListGroup.Item>
				<ListGroup.Item>Customer Rating	  
				<RatingStar id="123" rating={service.rating} />

				</ListGroup.Item>
			</ListGroup>

			<Card.Text className='mt-2'>
				{service.serviceDescriptor.description}
			</Card.Text>
			
			<Button id={service.id} variant="primary" >Order</Button>
		</Card.Body>
	</Card>
	</div>
  )
}

export default Preview