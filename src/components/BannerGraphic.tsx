export default function BannerGraphic() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1000" height="400" fill="#1199B6" />

      <path
        d="M 0 420 C 170 280, 260 190, 420 140 C 520 110, 640 110, 730 160 C 820 210, 900 230, 1000 190"
        fill="none"
        stroke="#fff"
        strokeWidth="80"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 1000 420 C 830 280, 730 200, 560 150 C 470 130, 330 120, 180 170 C 90 200, 30 250, 0 300"
        fill="none"
        stroke="#fff"
        strokeWidth="76"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 150 360 C 260 280, 410 240, 520 210 C 640 175, 740 140, 860 100"
        fill="none"
        stroke="#fff"
        strokeWidth="46"
        strokeLinecap="round"
      />
      <path
        d="M 900 360 C 760 280, 660 220, 520 185 C 420 160, 320 155, 240 180"
        fill="none"
        stroke="#fff"
        strokeWidth="42"
        strokeLinecap="round"
      />
      <path
        d="M 0 220 C 160 180, 300 165, 430 170 C 560 175, 710 210, 860 245 C 930 265, 980 250, 1000 240"
        fill="none"
        stroke="#fff"
        strokeWidth="58"
        strokeLinecap="round"
      />
      <path
        d="M 240 80 C 320 70, 420 90, 520 135 C 620 180, 700 215, 820 250"
        fill="none"
        stroke="#fff"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M 540 50 C 620 60, 720 90, 820 150"
        fill="none"
        stroke="#fff"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  );
}
