import Link from "next/link";
import React from "react";

const MenuItem = ({title, adress, Icon}) => {
  return (
    <div className="lg:mx-auto container">
      <Link href={adress} className="mx-4 lg:mx-6 hover:text-amber-600 " >
        < Icon className="sm:hidden text-2xl mx-4" />
        <p className="hidden sm:inline my-2 text-sm">
            {title}
        </p>
      </Link>
    </div>
  );
};

export default MenuItem;
