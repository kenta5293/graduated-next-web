import Link from 'next/link';

const Main = () => {
  return (
    <>
      <div>
        <Link href="/counter">
          <a>→ Counter 🥳</a>
        </Link>
      </div>
    </>
  );
};

export default Main;
