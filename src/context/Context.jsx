import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const allContext = createContext();
const MY_AUTH_APP = "MY_AUTH_APP_1";

const Context = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [isOpen, setIsOpen] = useState(false);
  const [counterCart, setCountesCart] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  const [buyProducts, setBuyProducts] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(function () 
    {window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return (
    <allContext.Provider
      value={{
        value,
        products,
        setProducts,
        isOpen,
        setIsOpen,
        counterCart,
        setCountesCart,
        currentProduct,
        setCurrentProduct,
        buyProducts,
        setBuyProducts,
        user, 
        setUser,
        password, 
        setPassword
      }}
    >
      {children}
    </allContext.Provider>
  );
};
export default Context;
