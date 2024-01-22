import React from 'react'
import Icon from './Icon';
import svgs from '../svgs';

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-[25.384px] h-7">
        <Icon content={svgs.logo} />
      </div>
      <div className="text-tsGray-900 text-2xl font-semibold">
        ClearLink <span className="text-tsBlue-400 text-2xl">.</span>
      </div>
    </div>
  );
}

export default Logo