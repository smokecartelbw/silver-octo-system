image: "https://via.placeholder.com/400x300"
    }
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addNewProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) return;
    setProducts([
      ...products,
      { ...newProduct, id: Date.now(), price: parseFloat(newProduct.price) }
    ]);
    setNewProduct({ name: "", price: "", image: "" });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return;
    let message = "🔥 Smoke Cartel BW Order 🔥%0A%0A";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - P${item.price}%0A`;
    });
    message += `%0ATotal: P${total}%0A%0APayment Method: Cash on Delivery`;
    return `https://wa.me/26778012199?text=${message}`;
  };

  if (!ageVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-center p-6">
        <div>
          <h1 className="text-3xl font-bold mb-6">Age Verification</h1>
          <p className="mb-6">You must be 18+ to enter Smoke Cartel BW.</p>
          <Button onClick={() => setAgeVerified(true)} className="rounded-2xl px-8 py-6 bg-yellow-500 text-black">
            I am 18+
          </Button>
        </div>
      </div>
