import { useRouter } from "next/router";
import Link from "next/link";

const IndexRandom = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Index page {router.query.id} </h1>
      <button>
        <Link href='/'>
          <a>Go Home</a>
        </Link>
      </button>
    </div>
  );
};

export default IndexRandom;
