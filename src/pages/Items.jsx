import { useEffect, useState } from "react";
import { fetchItems, deleteItemById } from "../api/itemsApi";
import ItemsTable from "../components/ItemsTable";

const Items = () => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const data = await fetchItems();
    setItems(data);
  };

  const handleDelete = async id => {
    await deleteItemById(id);
    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <section>
      <h3>All Ingested Items</h3>

      <div className="card">
        <ItemsTable items={items} onDelete={handleDelete} />
      </div>
    </section>
  );
};

export default Items;
