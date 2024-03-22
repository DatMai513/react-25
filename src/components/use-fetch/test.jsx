import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, loading);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {
        loading ? <h3>Loading, please wait</h3> : null
      }
      {
        error ? <h3>{error}</h3> : null
      }
      {
        data && data.products && data.products.length ?
        data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null
      }
    </div>
  );
}
