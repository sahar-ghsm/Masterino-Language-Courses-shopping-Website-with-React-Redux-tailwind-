function Rating({ value }) {
  return (
    <div>
      {Array.apply(null, Array(value)).map((item, index) => (
        <span key={index} className="text-sm">
          ⭐
        </span>
      ))}
    </div>
  );
}

export default Rating;
