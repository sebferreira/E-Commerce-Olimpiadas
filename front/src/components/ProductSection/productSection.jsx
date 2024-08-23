import {Box, Grid} from "@mui/material";
import Card from "../ProductCard/Card";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../queryFn";

export default function ProductsSection() {
  const params = useParams();
  const [product, useProduct]=useState([])
  const ConseguirProductos=async()=>{
    const productos=await getAllProducts() 
    console.log(productos)
   
    useProduct(productos) 
  }
  
   useEffect(()=>{
    ConseguirProductos()
  },[]) 

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
        scrollbarColor: "#262626 transparent",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}>
     <Grid
        container
        sx={{
          gap: "1.5rem",
          padding: {xs: "1rem", sm: "2rem"},
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        {product.map((producto) => {
          return (
            <Grid
              item
              xs={5}
              sm={6}
              md={4}
              lg={3}
              xl={2.5}
              key={producto.id}
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: 2,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#E0E0E0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "box-shadow 0.3s ease-in-out",
                  transform: "scale(1.02)",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: {xs: "space-evenly", sm: "space-between"},
                color: "black",
                padding: ".5rem",
                height: {xs: "250px", sm: "320px"},
                width: {xs: "200px", sm: "100px"},
              }}>
              <Card producto={producto} />
            </Grid>
          );
        })}
      </Grid> 
    </Box>
  );
}
