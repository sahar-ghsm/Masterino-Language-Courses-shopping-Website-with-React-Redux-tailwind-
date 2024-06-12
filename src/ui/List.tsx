type Props = {
  items: Array<object>;
  render: () => React.ReactNode;
  classes: string;
};

function List({ items, render, classes }: Props) {
  return (
    <div
      className={`${classes} mx-5 mt-5 flex flex-col justify-center gap-4 md:mx-auto md:grid md:max-w-screen-lg md:grid-cols-3 md:flex-row md:px-5`}
    >
      {(items || []).map(render)}
    </div>
  );
}

export default List;
