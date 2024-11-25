import { IGadget } from "../../MainTypes/Gadget"
import { OneGoodsList } from "./MyComponents/OneGoodsList"

const DATALIST: IGadget[] = [
   {
      id: "123",
      name: "a",
      price: 199.99,
      description: "tablet",
      img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
      type: "PC",
      action: 40,
   },
   {
      id: "231",
      name: "Best Tablet und grau screen",
      price: 99.99,
      description: "tablet",
      img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
      type: "Kamera",
   },
   {
      id: "423",
      name: "Laptop 29001 RTXsad",
      price: 200,
      description: "tablet",
      img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
      type: "PC",
   },
   {
      id: "454564",
      name: "Asdasdasdasdasdasdas dasdasdasd",
      price: 2000000,
      description: "tablet",
      img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
      type: "Musik",
   },
   {
      id: "43345",
      name: "a",
      price: 199.99,
      description: "tablet",
      img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
      type: "Handy",
   },
]

export const Catalog = (): JSX.Element => {
   return (
      <div className="w-full flex flex-col gap-6">
         <OneGoodsList name="Angebot der Woche" list={DATALIST} />
         {/* <OneGoodsList
            name="PC und Laptop"
            list={["a", "b", "c", "d", "e", "g", "df"]}
         /> */}
      </div>
   )
}
