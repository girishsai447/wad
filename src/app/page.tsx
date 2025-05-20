
import { ProductCard } from '@/components/ProductCard';
import { placeholderProducts } from '@/lib/placeholders';
import type { Product } from '@/types';

export default function CataloguePage() {
  const products: Product[] = placeholderProducts;

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Welcome to <span className="text-primary">ShopWave</span>
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground sm:mt-6">
          Discover our curated collection of amazing products.
        </p>
      </section>

      {products.length === 0 ? (
        <p className="text-center text-muted-foreground">No products available at the moment. Please check back later.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
