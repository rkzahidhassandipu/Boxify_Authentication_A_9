import React from "react";
import { useLoaderData } from "react-router"; // fix router import
import SubscriptionCard from "./SubscriptionCard";
import ServiceHeader from "./ServiceHeader";

const SubscriptionBox = () => {
  const subscriptionData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ServiceHeader />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {subscriptionData.map((subCard) => (
          <SubscriptionCard key={subCard.id} service={subCard} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionBox;
