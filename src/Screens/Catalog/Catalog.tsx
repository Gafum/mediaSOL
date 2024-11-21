import { OneGoodsList } from "./MyComponents/OneGoodsList"

export const Catalog = (): JSX.Element => {
   return (
      <div className="w-full flex flex-col gap-6">
         <OneGoodsList
            name="Angebot der Woche"
            list={[
               {
                  id: "123",
                  name: "a",
                  price: 200,
                  description: "tablet",
                  img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
                  type: "PC",
               },
               {
                  id: "231",
                  name: "a",
                  price: 200,
                  description: "tablet",
                  img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
                  type: "PC",
               },
               {
                  id: "423",
                  name: "a",
                  price: 200,
                  description: "tablet",
                  img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
                  type: "PC",
               },
               {
                  id: "43345",
                  name: "a",
                  price: 200,
                  description: "tablet",
                  img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
                  type: "PC",
               },
               {
                  id: "454564",
                  name: "a",
                  price: 200,
                  description: "tablet",
                  img: "https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg",
                  type: "PC",
               },
            ]}
         />
         {/* <OneGoodsList
            name="PC und Laptop"
            list={["a", "b", "c", "d", "e", "g", "df"]}
         /> */}
      </div>
   )
}
