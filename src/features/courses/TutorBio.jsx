function TutorBio({ tutor }) {
  return (
    <div className="rounded p-5 shadow-md">
      <h3 className="mb-5 text-base font-semibold">About Tutor</h3>
      <div className="flex items-center gap-4">
        <img
          src={tutor?.avatar}
          alt="tutor-image"
          className="h-[75-px] w-[75px] rounded-full md:h-[96px] md:w-[96px]"
        />
        <p className="text-sm leading-7">{tutor?.bio}</p>
      </div>
    </div>
  );
}

export default TutorBio;
