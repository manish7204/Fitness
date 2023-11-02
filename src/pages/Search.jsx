import Search from "../components/SearchBar";
import "../search.css";

export default function SearchPage({items, setItems}) {
  return (
    <>
      <section className="container">
        <div>
          <nav>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M14.9454 23.644L13.6572 24.9323C13.1117 25.4777 12.2297 25.4777 11.69 24.9323L0.409106 13.6572C-0.136369 13.1117 -0.136369 12.2297 0.409106 11.69L11.69 0.409106C12.2355 -0.136369 13.1175 -0.136369 13.6572 0.409106L14.9454 1.69736C15.4967 2.24863 15.4851 3.14809 14.9222 3.68776L7.9297 10.3495H24.6073C25.3791 10.3495 26 10.9704 26 11.7422V13.5992C26 14.3709 25.3791 14.9919 24.6073 14.9919H7.9297L14.9222 21.6536C15.4909 22.1933 15.5025 23.0927 14.9454 23.644Z"
                fill="white"
              />
            </svg>
            <h2>Add Food</h2>
          </nav>
          <div >
            <Search items={items} setItems={setItems} />
          </div>
          <br></br>

          <div></div>
        </div>
      </section>
    </>
  );
}
