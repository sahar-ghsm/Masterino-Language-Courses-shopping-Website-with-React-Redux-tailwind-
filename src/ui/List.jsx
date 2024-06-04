function List({ items, render }) {
  return <div>{items.map(render)}</div>;
}

export default List;
