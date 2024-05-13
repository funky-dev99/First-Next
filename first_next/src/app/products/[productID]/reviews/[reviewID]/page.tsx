export default function ReviewDetails({
  params,
}: {
  params: { productID: string; reviewID: string };
}) {
  return (
    <h1>
      Review {params.reviewID} for Product {params.productID}
    </h1>
  );
}
