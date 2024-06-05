function List({ items, render, classes }) {
  return (
    <div
      className={`${classes} mx-5 mt-5 flex flex-col justify-center gap-4 md:mx-auto md:grid md:max-w-screen-lg md:grid-cols-3 md:flex-row md:px-5`}
    >
      {(items || []).map(render)}
    </div>
  );
}

export default List;
