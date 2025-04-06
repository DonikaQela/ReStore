import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import Notfound from "../../app/errors/NotFound";
import Loading from "../../app/layout/Loading";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id &&
      agent.Catalog.details(parseInt(id))
        .then((response) => setProductDetails(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading message="Loading product details..." />;
  if (!productDetails) return <Notfound />;

  return (
    <Grid container spacing={6} sx={{ mt: 20 }}>
      <Grid size={6}>
        <img
          src={productDetails?.imageUrl}
          alt={productDetails?.name}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{productDetails?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h5" color="secondary">
          $ {(productDetails?.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{productDetails.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{productDetails.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{productDetails.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{productDetails.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity in stock</TableCell>
                <TableCell>{productDetails.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
