import React from 'react';
import type { Restaurant } from "../pages/[slug]"

export const formatAddress = (address: Restaurant["address"]) => `${address.streetName}, ${address.streetNumber} - ${address.zipCode}`
