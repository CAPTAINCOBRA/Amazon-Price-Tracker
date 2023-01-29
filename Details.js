// https://www.amazon.com/dp/B08H95Y452
// https://www.amazon.in/AmazonBasics-Silicone-Baking-12-Pieces-Multicolor/dp/B01KWTGAVQ/ref=d_pb_allspark_purchase_sims_desktop_sccl_2_5/257-0328387-5488942?pd_rd_w=Guu3g&content-id=amzn1.sym.a4543507-b579-4aa3-8a29-824b6607c4d8&pf_rd_p=a4543507-b579-4aa3-8a29-824b6607c4d8&pf_rd_r=YJZV36YHRYESW0VSSW3H&pd_rd_wg=x6c55&pd_rd_r=6f880c9e-4819-428b-ace2-a2ccfb366333&pd_rd_i=B01KWTGAVQ&psc=1

//Another API
// const options = {
//   method: "GET",
//   url: `https://amazon24.p.rapidapi.com/api/product/${productId}`,
//   // url: `https://amazon24.p.rapidapi.com/api/product/B07CRG94G3`,
//   // url: `https://amazon24.p.rapidapi.com/api/product/B099N1LC4R`,
//   params: { country: "IN" },
//   headers: {
//     "X-RapidAPI-Key": "cff772792amsh9f9adca983c6877p1d8cf4jsnba9efb9772e9",
//     "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
//   },
// };

// dispatch(
//   trackerSliceAction.updateState({
//     key: "searchProductId",
//     value: productId,
//   })
// );

// const options = {
//   method: "GET",
//   url: "https://amazon23.p.rapidapi.com/product-details",
//   params: { asin: `${productId}`, country: "IN" },
//   headers: {
//     "X-RapidAPI-Key": "cff772792amsh9f9adca983c6877p1d8cf4jsnba9efb9772e9",
//     "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
//   },
// };

// dispatch(
//   trackerSliceAction.updateState({ key: "searchEmpty", value: false })
// );
// dispatch(
//   trackerSliceAction.updateState({
//     key: "searchedProductDetails",
//     value: response.data.result[0],
//   })
// );

// {
//   console.log(
//     "Just rendered TopChart -" + allProducts.length > 1
//       ? dataValues[0]?.Labels
//       : "Labels Not Present Yet"
//   );
// }

// //Focusing on the Cron Job Stuff here
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const nightmare = require("nightmare")();

// // const args = process.argv.slice(2);
// // const args = ["https://www.amazon.in/gp/product/B06Y5LK5QJ", "Boat Headphones"];
// // const args = ["https://www.amazon.in/gp/product/B06Y5LK5QJ", 1000];
// const args = [
//   // "https://www.amazon.in/Boat-Rockerz-550-Headphone-Aesthetics/dp/B0856HY85J/ref=dp_prsubs_2?pd_rd_i=B0856HY85J&psc=1",
//   "https://www.amazon.com/EVGA-Customizable-Profiles-Ambidextrous-905-W1-12BK-KR/dp/B09QC66K1J/ref=sr_1_3?keywords=gaming+mouse&pd_rd_r=8263795a-666c-4039-a5bc-18a2e8aab1bb&pd_rd_w=OM3r1&pd_rd_wg=FQNPf&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=5AC57TRK3PWHHBQDB73J&qid=1662285649&sr=8-3",
//   1000,
// ];
// const url = args[0];
// const minPrice = args[1];
// // console.log(url);
// // console.log(minPrice);

// checkPrice();

// async function checkPrice() {
//   try {
//     const priceString = await nightmare
//       .goto(url)
//       .wait("#priceblock_ourprice")
//       .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
//       .end();

//     // const priceString = await nightmare
//     //   .goto("https://en.wikipedia.org/wiki/Main_Page")
//     //   .wait("#From_today's_featured_article")
//     //   .evaluate(
//     //     () => document.getElementById("From_today's_featured_article").innerText
//     //   )
//     //   .end();

//     //   var priceNumber = parseFloat(priceString.replace("₹", ""));
//     //   var priceNumber = parseInt(priceString.replace("$", ""));
//     var priceNumber = parseFloat(priceString.replace("$", ""));
//     //   var priceNumber = priceString.replace("₹", "");
//     //   priceNumber = parseFloat(priceNumber);

//     console.log(priceString);
//     console.log(priceNumber);
//     console.log(typeof priceNumber);
//     //   var temp = priceNumber - minPrice;
//     //   console.log(temp);

//     if (priceNumber < minPrice) {
//       // await sendEmail(
//       //   "Price is low",
//       //   `The price on ${url} has dropped below ${minPrice}`
//       //   //
//       // )
//       //   .then(() => {
//       //     console.log("Mail Success");
//       //   })
//       //   .catch((e) => {
//       //     console.log(e);
//       //   });
//       console.log("Havent sent mail");
//       console.log("Its cheap!");
//     }
//     //   else {
//     //     console.log("Its costly!");
//     //   }
//   } catch (error) {
//     // await sendEmail("Amazon Price Checker Error", error.message);
//     console.log("Error in Catch");
//     throw error;
//   }
// }

// function sendEmail(subject, body) {
//   const email = {
//     to: "bopoxo5814@bbsaili.com",
//     // from: "bopoxo5814@bbsaili.com",
//     from: "ekanshworkspace@gmail.com",
//     // from: "amazon-price-checker@example.com",
//     subject: subject,
//     text: body,
//     html: body,
//   };

//   return sgMail.send(email);
// }
// //Ends

// <Grid container md={8}>
{
  /* <h1 className="">WatchList</h1> */
}

{
  /* {allProducts.length > 1 && (
        <Line
          options={options}
          data={dataValues[0]}
          style={{ width: "900px", height: "700px !important" }}
        />
      )} */
}
