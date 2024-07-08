'use client'

const CallButton = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="text-white px-4 py-2 rounded-md frosted-glass"
    >
      Call
    </a>
  );
};

export default CallButton;
