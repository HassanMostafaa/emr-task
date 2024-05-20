"use client";

import { FunctionComponent } from "react";

export const PersonWalk: FunctionComponent<{ color: string }> = ({
  color = "#009456",
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6C15 5.20888 15.2346 4.43552 15.6741 3.77772C16.1136 3.11992 16.7384 2.60723 17.4693 2.30448C18.2002 2.00173 19.0044 1.92252 19.7804 2.07686C20.5563 2.2312 21.269 2.61216 21.8284 3.17157C22.3878 3.73098 22.7688 4.44372 22.9231 5.21964C23.0775 5.99556 22.9983 6.79983 22.6955 7.53074C22.3928 8.26164 21.8801 8.88635 21.2223 9.32588C20.5645 9.76541 19.7911 10 19 10C17.9401 9.99671 16.9246 9.57422 16.1752 8.82479C15.4258 8.07536 15.0033 7.05985 15 6ZM26 17C22.4375 17 20.7875 15.2375 19.05 13.3625C18.6125 12.8875 18.15 12.4 17.675 11.9625C13.025 7.6625 5.6125 14.975 5.2875 15.2875C5.17825 15.3772 5.08899 15.4887 5.02544 15.6149C4.9619 15.7412 4.9255 15.8793 4.91856 16.0205C4.91163 16.1617 4.93433 16.3027 4.98519 16.4346C5.03606 16.5664 5.11396 16.6862 5.2139 16.7861C5.31383 16.886 5.43358 16.9639 5.56544 17.0148C5.6973 17.0657 5.83835 17.0884 5.97951 17.0814C6.12067 17.0745 6.25882 17.0381 6.38506 16.9746C6.5113 16.911 6.62284 16.8217 6.7125 16.7125C7.8604 15.5941 9.14073 14.6202 10.525 13.8125C12.3125 12.7875 13.8125 12.425 14.9875 12.7125L12.775 17.8L8.0875 28.6C8.03376 28.7197 8.0044 28.8488 8.00113 28.98C7.99786 29.1111 8.02075 29.2416 8.06847 29.3637C8.11618 29.4859 8.18775 29.5974 8.27901 29.6916C8.37028 29.7858 8.4794 29.8609 8.6 29.9125C8.72469 29.9724 8.86167 30.0024 9 30C9.19425 30.0008 9.38443 29.9443 9.54674 29.8376C9.70905 29.7309 9.83628 29.5787 9.9125 29.4L14.1125 19.7375L18 22.5125V29C18 29.2652 18.1054 29.5196 18.2929 29.7071C18.4804 29.8946 18.7348 30 19 30C19.2652 30 19.5196 29.8946 19.7071 29.7071C19.8946 29.5196 20 29.2652 20 29V22C20.0012 21.8401 19.9631 21.6824 19.889 21.5407C19.8149 21.399 19.707 21.2777 19.575 21.1875L14.9375 17.8625L16.7 13.8L17.5875 14.725C19.3625 16.625 21.5625 19 26 19C26.2652 19 26.5196 18.8946 26.7071 18.7071C26.8946 18.5196 27 18.2652 27 18C27 17.7348 26.8946 17.4804 26.7071 17.2929C26.5196 17.1054 26.2652 17 26 17Z"
        fill={color}
      />
    </svg>
  );
};