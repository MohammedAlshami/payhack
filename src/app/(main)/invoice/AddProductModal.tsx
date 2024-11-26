import { Button } from "@/lib/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/components/ui/dialog";
import Image from "next/image";
import { IProduct, products } from "../_components/productData";
import CountButton from "./CountButton";

function AddProductModal({
  userProductStore,
  setUserProductStore,
}: {
  userProductStore: IProduct[];
  setUserProductStore: React.Dispatch<React.SetStateAction<IProduct[]>>;
}) {
  return (
    <Dialog>
      <DialogTrigger className="mt-8 pl-4">
        {/* <Button variant={"link"}>Add items</Button> */}
        <h2 className="underline text-blue-600">Add Items</h2>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Products</DialogTitle>
        <DialogHeader className="grid grid-cols-3 gap-2 place-content-center place-items-center">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col gap-1 items-start">
              <Image src={product.img} alt={product.title} className="w-32 h-40" />
              <h3 className="font-semibold">{product.title}</h3>
              <span className="text-xs">{product.price}</span>
              <CountButton
                userProductStore={userProductStore}
                index={index}
                setUserProductStore={setUserProductStore}
              />
            </div>
          ))}
        </DialogHeader>
        <DialogFooter className="mt-12 mx-auto">
          <DialogClose asChild>
            <Button>Apply to proceed</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddProductModal;
