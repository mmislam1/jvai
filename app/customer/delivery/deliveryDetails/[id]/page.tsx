
"use client"
import React, { useState } from "react";
import { Star, ArrowLeft, HomeIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
    updateDeliveryRequestFormField,
    resetDeliveryRequestForm,
    submitDeliveryRequest,
} from "../../../../store/features/customerSlice";
import { RootState, AppDispatch } from "../../../../store/store";
import Image from "next/image";
import DeliveryDetails from "./deliveryDetails";


export default function DeliveryRequestPage({
    params,
}: {
    params: { id: string };
    }) {
        return <DeliveryDetails id={params.id} />;
    
}
