// src/pages/Store/index.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { setApiProducts, removeProduct } from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";

export default function Store() {
  const dispatch = useDispatch<AppDispatch>();

  const { apiProducts, localProducts } = useSelector(
    (state: RootState) => state.products
  );

  const role = useSelector((state: RootState) => state.auth.role);

  const allProducts = [...apiProducts, ...localProducts];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20");
        const data = await res.json();
        dispatch(setApiProducts(data));
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    if (apiProducts.length === 0) fetchProducts();
  }, []);

  return (
    <div>
      <h1>Tiendita</h1>

      {role === "manager" && (
        <button
          onClick={() => (window.location.href = "/admin/create")}
        >
            Crear Producto
        </button>
      )}

      <div>
        {allProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            {role === "customer" && (
              <button
                onClick={() => dispatch(addToCart(product))}
              >
                Agregar al carrito
              </button>
            )}

            {role === "manager" && (
              <button
                onClick={() => dispatch(removeProduct(product.id))}
              >
               Eliminar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
