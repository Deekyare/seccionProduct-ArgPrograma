import ProductDetails from "../components/ProductDetails/ProductDetails";

const product = {
  id: 1,
  titulo: "Sillon Muren",
  sku: 10.453,
  cantidadDisponible: 8,
  shortDescription: "Sillón orejero, Muren gris oscuro.",
  longDescription:
  `El respaldo alto de esta silla te ofrece un apoyo óptimo para el cuello y, por tanto, favorece el relax. 10 años de garantía. 
  Consulta las condiciones en el folleto de garantía.`,
  materialDescription: `
    Material Tela: 100 % poliéster Estructura: Contrachapado,
    Poliuretano 20 kg/m3, Poliuretano 25 kg/m3, Poliuretano 35
    kg/m3, Tablero de partículas, Madera maciza Cojín de asiento:
    Poliuretano 35 kg/m3 Pata: Haya maciza, Abedul macizo, Tinte
    Mantenimiento Estructura tapizada Limpiar con aspiradora.
    Limpiar con un paño húmedo. Funda de cojín No se debe lavar a
    máquina. No utilizar lejía. No secar en secadora. No planchar.
    No limpiar en seco.
  `,
};

const Product = () => {
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default Product;
