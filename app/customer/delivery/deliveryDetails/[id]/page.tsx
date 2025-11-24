
//"use client"

import DeliveryDetails from "./deliveryDetails";


export default async function DeliveryRequestPage({
    params,
}: {
    params: Promise<{ id: any}>
    }) {
    const  userId  = (await params).id
    
        return <DeliveryDetails id= {userId} />;
    
}
