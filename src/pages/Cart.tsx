import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Download, Minus, Phone, Plus, ShoppingBasket, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, cartCount, addItem, decreaseItem, removeItem, clearCart } = useCart();
  const [copyStatus, setCopyStatus] = useState('');

  const shoppingList = useMemo(() => {
    if (cartItems.length === 0) {
      return '';
    }

    const lines = cartItems.map((item) => `${item.quantity} x ${item.name} (${item.label})`);

    return [
      'Tarragon Market shopping list',
      '6623 S Dixie Hwy, Miami, FL 33143',
      '+1 305-663-1121',
      '',
      ...lines,
    ].join('\n');
  }, [cartItems]);

  const handleCopy = async () => {
    if (!shoppingList) {
      return;
    }

    try {
      await navigator.clipboard.writeText(shoppingList);
      setCopyStatus('Copied');
    } catch {
      setCopyStatus('Copy failed');
    }
  };

  const handleDownload = () => {
    if (!shoppingList) {
      return;
    }

    const file = new Blob([shoppingList], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tarragon-shopping-list.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4 mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-14 w-14 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center">
              <ShoppingBasket className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Checkout List</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Your Cart</h1>
            </div>
          </div>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Save this list on your phone or copy it before calling or visiting the store.
          </p>
        </header>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
            <section className="bg-white rounded-[32px] border border-outline-variant/20 shadow-soft overflow-hidden">
              <div className="divide-y divide-outline-variant/20">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div>
                      <p className="text-xl font-bold text-primary">{item.name}</p>
                      <p className="text-sm font-semibold text-on-surface-variant">{item.label}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center rounded-full border border-outline-variant/40 bg-surface-container-low">
                        <button
                          type="button"
                          onClick={() => decreaseItem(item.id)}
                          aria-label={`Decrease ${item.name}`}
                          className="p-3 text-primary hover:bg-primary/5 rounded-l-full transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center font-bold text-primary">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => addItem({ id: item.id, name: item.name, label: item.label })}
                          aria-label={`Increase ${item.name}`}
                          className="p-3 text-primary hover:bg-primary/5 rounded-r-full transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="p-3 text-lebanese-red hover:bg-lebanese-red/10 rounded-full transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="bg-primary text-white rounded-[32px] p-8 h-fit shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-fixed mb-3">Summary</p>
              <h2 className="text-3xl font-bold mb-8">{cartCount} item{cartCount === 1 ? '' : 's'}</h2>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-3 bg-white text-primary py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Copy className="h-5 w-5" />
                  {copyStatus || 'Copy List'}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-3 bg-primary-fixed text-primary py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Download className="h-5 w-5" />
                  Download List
                </button>
                <a
                  href="tel:+13056631121"
                  className="w-full flex items-center justify-center gap-3 border border-white/30 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Call Store
                </a>
              </div>

              <button
                type="button"
                onClick={clearCart}
                className="mt-8 text-sm font-bold text-white/80 hover:text-white underline underline-offset-4"
              >
                Clear cart
              </button>
            </aside>
          </div>
        ) : (
          <section className="bg-white rounded-[32px] border border-outline-variant/20 shadow-soft p-10 text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center">
              <ShoppingBasket className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h2>
            <p className="text-on-surface-variant mb-8">Add products to build a shopping list before you visit.</p>
            <Link to="/products" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container transition-colors">
              Browse Products
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
