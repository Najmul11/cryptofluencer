import React from 'react';
import { HoverEffect } from './card-hover-effect';

const CardSection = () => {
    return (
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={drops} />
      </div>
    );
};

export default CardSection;



export const drops = [
  {
    id: 1,
    title: "Phyt.fun ",
    description: "Participate in the testnet and claim your NFT",
    logo: "/assets/phyt.jpg",
    slug: "phyt.fun-",
    category: "NFT",
  },
  {
    id: 2,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "DeFi",
  },
  {
    id: 3,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Infrastructure",
  },
  {
    id: 4,
    title: "Phyt.fun ",
    description: "Participate in the testnet and claim your NFT",
    logo: "/assets/phyt.jpg",
    slug: "phyt.fun-",
    category: "Gaming",
  },
  {
    id: 5,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "Social",
  },
  {
    id: 6,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Identity",
  },
  {
    id: 7,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "Metaverse",
  },
  {
    id: 8,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Data",
  },
  {
    id: 9,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Data",
  },
];



