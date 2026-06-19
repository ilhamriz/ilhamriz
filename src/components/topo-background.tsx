export function TopoBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#2D6A3F" strokeWidth="1" fill="none" opacity="0.07">
          <path d="M-50 220 C 200 120, 420 320, 650 200 S 1050 80, 1260 240" />
          <path d="M-50 280 C 200 180, 420 380, 650 260 S 1050 140, 1260 300" />
          <path d="M-50 340 C 200 240, 420 440, 650 320 S 1050 200, 1260 360" />
          <path d="M-50 400 C 220 300, 440 500, 660 380 S 1060 260, 1260 420" />
          <path d="M-50 460 C 220 360, 440 560, 660 440 S 1060 320, 1260 480" />
          <path d="M-50 520 C 240 420, 460 620, 680 500 S 1080 380, 1260 540" />
          <path d="M-50 580 C 240 480, 460 680, 680 560 S 1080 440, 1260 600" />
          <path d="M-50 640 C 260 540, 480 740, 700 620 S 1100 500, 1260 660" />
        </g>
        <g stroke="#1E2E22" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M-50 250 C 200 150, 420 350, 650 230 S 1050 110, 1260 270" />
          <path d="M-50 370 C 220 270, 440 470, 660 350 S 1060 230, 1260 390" />
          <path d="M-50 490 C 240 390, 460 590, 680 470 S 1080 350, 1260 510" />
          <path d="M-50 610 C 260 510, 480 710, 700 590 S 1100 470, 1260 630" />
        </g>
      </svg>
    </div>
  )
}
