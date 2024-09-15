'use client'

const CallButton = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="text-white px-4 py-2 rounded-md frosted-glass"
    >
      Call : +919633699962
    </a>
  );
};

export default CallButton;
