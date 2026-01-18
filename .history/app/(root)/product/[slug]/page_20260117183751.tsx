import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";

const ProductDetailsPage = async (props: {
    params : Promise<{ slug: string }>
}) => {
    const { slug } = await props.params;

    const product =  await getProductBySlug(slug);
    if (!product) notFound();

  return <div>
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Image Section */}
        <div className="col-span-2">
          {/* Images Component */}
        </div>
        {/* Details Column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
          </div>
        </div>

      </div>
    </section>
  </div>;
}

export default ProductDetailsPage;