import { initialData } from "@/seed/seed";
import Image from "next/image";
import { Title } from "@/components";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default async function OrderPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Order #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <div
              className={`flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 bg-red-500`}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pending Payment</span> */}
              <span className="mx-2">Paid</span>
            </div>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3} </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Deliery address</h2>
            <div className="mb-10">
              <p className="text-xl">Juan</p>
              <p>Av. Siempreviva 742</p>
              <p>Col. Centro</p>
              <p>Ciudad de Buenos Aires</p>
              <p>Buenos Aires</p>
              <p>CP 1143</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Order</h2>

            <div className="grid grid-cols-2">
              <span>Total</span>
              <span className="text-right">3 Products</span>

              <span>Amount</span>
              <span className="text-right">$ 100</span>

              <span>Taxes (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5">Total Amount</span>
              <span className="text-2xl mt-5 text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <div
                className={`flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 bg-red-500`}
              >
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pending Payment</span> */}
                <span className="mx-2">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
