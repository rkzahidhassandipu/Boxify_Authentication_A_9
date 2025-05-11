import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const SubscriptionDetails = () => {
    const {id} = useParams();
    const services = useLoaderData();
    const selectedService = services.find(service => service.id === id);
    console.log("user",selectedService)
    if(!selectedService){
        return <p>Service not found</p>;
    }
  return (
    <div>
       <div className="p-6">
      <h2 className="text-2xl font-bold">{selectedService.name}</h2>
      <img src={selectedService.banner} alt={selectedService.name} />
      <p>{selectedService.description}</p>
      <p><strong>Category:</strong> {selectedService.tech_category}</p>
      <p><strong>Price:</strong> ${selectedService.price}</p>
      <p><strong>Frequency:</strong> {selectedService.frequency}</p>
      <p><strong>Rating:</strong> {selectedService.ratings}⭐</p>
      {/* Add review form here */}
    </div>
    </div>
  )
}

export default SubscriptionDetails
