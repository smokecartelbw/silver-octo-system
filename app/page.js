import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function SmokeCartelBW() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "RAW Classic Cones",
      price: 10,
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 2,
      name: "King Palm Mini Rolls",
      price: 12,
      image: "https://via.placeholder.com/400x300"
    }
  ]);

  const [newProduct, setNewProduct] = useState({
