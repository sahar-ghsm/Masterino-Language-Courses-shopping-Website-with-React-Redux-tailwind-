import { Form } from 'react-router-dom';
import Rating from '../../ui/Rating';
import { useState } from 'react';
function NewReview({ submitNewReview }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [rate, setRate] = useState(5);

  function handleSubmitForm(e) {
    e.preventDefault();
    // id: faker.string.uuid(),
    // user: {
    //   id: faker.string.uuid(),
    //   userName: faker.person.fullName(),
    //   title: faker.person.jobTitle(),
    //   avatar: faker.image.avatarLegacy(),
    // },
    // comment: faker.lorem.lines({ min: 2, max: 4 }),
    // rate: faker.number.int(5),
    // category: faker.commerce.department(),
    // courseId: dataObj[0].id,
    // createDate: faker.date.betweens({
    //   from: '2023-01-01T00:00:00.000Z',
    //   to: '2024-01-01T00:00:00.000Z',
    // }),
    const newReview = {
      user: {
        id: 123,
        userName: 'sahar',
        title: 'Web Developer',
      },
      comment,
      rate,
      createDate: new Date(),
    };
    submitNewReview(newReview);
  }
  return (
    <div className="rounded p-5 shadow-md">
      <p className="md:text-md my-3 mb-5 text-sm text-slate-500">
        Your email address will not be published.
      </p>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <div className="flex flex-1 items-center justify-between gap-4">
          <label className="text-sm">Your Rate:</label>
          <Rating value={rate} />
        </div>
        <div className="my-2">
          <label className="text-sm">Your Name:</label>
          <input
            className="mt-2 w-full rounded-md border"
            required
            type="text"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label className="text-sm">Your Comment:</label>
          <textarea
            className="mt-2 w-full rounded-md border"
            required
            type="text"
            name="userName"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label className="text-sm">Your Email:</label>
          <input
            className="mt-2 w-full rounded-md border"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="userName"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-5 rounded-md border bg-lime-500 px-3 py-2 text-sm text-slate-50 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewReview;
