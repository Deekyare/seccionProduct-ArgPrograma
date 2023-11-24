interface Product {
  id: number;
  titulo: string;
  shortDescription: string;
  longDescription: string;
  materialDescription: string;
  sku: number;
  cantidadDisponible: number;
}

function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      <div className="col-md-6">
        <div className="img-details d-flex justify-content-center ">
          <img
            src="https://www.ikea.com/es/es/images/products/strandmon-sillon-orejero-nordvalla-gris-oscuro__0325432_pe517964_s5.jpg?f=s"
            alt=""
          />
        </div>
        <div className="img-list d-flex justify-content-center gap-2">
          <img
            src="https://www.ikea.com/es/es/images/products/strandmon-sillon-orejero-nordvalla-gris-oscuro__0325432_pe517964_s5.jpg?f=s"
            alt=""
          />

          <img
            src="https://www.ikea.com/es/es/images/products/strandmon-sillon-orejero-nordvalla-gris-oscuro__1116445_pe872501_s5.jpg?f=m"
            alt=""
          />

          <img
            src="https://www.ikea.com/es/es/images/products/strandmon-sillon-orejero-nordvalla-gris-oscuro__0836847_pe596292_s5.jpg?f=s"
            alt=""
          />

          <img
            src="https://www.ikea.com/es/es/images/products/strandmon-sillon-orejero-nordvalla-gris-oscuro__0836845_pe583755_s5.jpg?f=s"
            alt=""
          />
          <img
            src="https://www.ikea.com/es/es/images/products/strandmon-sillon-orejero-nordvalla-gris-oscuro__0325435_pe517963_s5.jpg?f=s"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="title">{product.titulo}</h3>

        <h4 className="short-description ">{product.shortDescription}</h4>
        <p className="mt-3 w-100">{product.longDescription}</p>
        <strong>Materiales : </strong>
        <p className="mt-3 w-100">{product.materialDescription}</p>
        <div className="product_info">
          <span className="data">
            <strong>Sku:</strong> {product.sku}
          </span>
          <span>
            <strong>Cantidad disponible:</strong> {product.cantidadDisponible}
          </span>
        </div>
        <div>
          <strong>Precio : </strong>{" "}
          <span className="monto-viejo">$544.000</span>{" "}
          <span className="precio"> $300.000</span>
        </div>
        <div className="mt-2">
          <strong>Cantidad</strong>
          <input type="cantidad" placeholder="1" className="cantidad mx-3" />
        </div>
        <p>
          <button className="btn btn-round btn-danger mt-3" type="button">
            Add to Cart
          </button>
        </p>
      </div>
    </>
  );
}

export default ProductDetails;
