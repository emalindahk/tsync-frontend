import Image from 'next/image'
import React from 'react'
import userGroup from '../../public/avatars/Avatargroup.svg'
import svgs from '../svgs';
import Icon from './Icon';

const UserReviews = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={userGroup} alt="User group" />
      <div className="flex flex-col">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Icon content={svgs.star} key={i} />
          ))}
          <span className="text-tsGray-600 font-semibold text-sm ml-1">5.0</span>
        </div>

        <span className="text-tsGray-600 font-normal text-sm">
          from 3,000+ reviews
        </span>
      </div>
    </div>
  );
}

export default UserReviews