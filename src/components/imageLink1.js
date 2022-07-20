import Image from 'next/image';
import Link from 'next/link';

export default function ImageLink1() {
    return (
<Link href='https://infinite-ridge-58847.herokuapp.com/login'>
      <a>
          <Image
            src="assets/fev-course-1-1.png"
            alt="Content Image"
          />
    </a>

  </Link>
  
  )}