import React from 'react';
import Link from 'next/link';
  const Footer = () => {
  return (
    <div className="footer">
      <h3>
      © MangaSwap 2023
      </h3>
     <Link href="../main/about" className={'base'}>
      <p>
      About us
      </p>
     </Link>
     <Link href='../main/contact' className='contact'>
      <div className='contact'>
      Contact
      </div>
     </Link>
    </div>
  );
}

export default Footer;