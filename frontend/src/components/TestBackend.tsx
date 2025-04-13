const TEXT =
  "Tariffs are taxes imposed by governments on imported goods to protect domestic industries, regulate trade, and generate revenue.";

export default function TestBackend() {
  return (
    <>
      <button
        onClick={async () => {
          fetch("http://localhost:8080/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "text/plain",
            },
            body: TEXT,
          })
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        }}
        className="p-2 border-2 cursor-pointer"
      >
        Generate
      </button>
    </>
  );
}
