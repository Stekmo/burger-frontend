import React from 'react';
import type { Restaurant } from "../types/restaurant"

export const formatAddress = (address: Restaurant["address"]) => `${address.streetName}, ${address.streetNumber} - ${address.zipCode}`
