import { ChevronRight } from "lucide-react"

function ServicesSection(): JSX.Element {
   return (
      <section className="flex gap-4 mt-4">
         <div className="w-1/2 flex flex-col gap-4">
            <div className="text__bloc relative bg-primaryDarkGrey p-5 rounded-lg">
               <div className="text__block absolute max-w-[350px] w-1/2">
                  <h1 className=" text-white text-2xl">
                     Consultation schools and companies
                  </h1>
                  <button className="h-10 w-10 bg-[#ffffff44] flex justify-center items-center mt-3 rounded-[4px] duration-300 transition-colors hover:bg-[#ffffff55]">
                     <ChevronRight color="#ffffff" />
                  </button>
               </div>
               <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/2 ml-auto"
               >
                  <g>
                     <path
                        d="M11.3 22.22C12.0636 21.5492 12.6046 20.6615 12.8509 19.6754C13.0973 18.6893 13.0372 17.6515 12.6788 16.7004C12.3203 15.7493 11.6805 14.93 10.8446 14.3517C10.0087 13.7734 9.01642 13.4637 8 13.4637C6.98358 13.4637 5.99129 13.7734 5.15539 14.3517C4.3195 14.93 3.67969 15.7493 3.32124 16.7004C2.96279 17.6515 2.90272 18.6893 3.14905 19.6754C3.39538 20.6615 3.9364 21.5492 4.7 22.22C3.30014 22.8539 2.11247 23.8775 1.27898 25.1685C0.445495 26.4596 0.00147185 27.9633 0 29.5V30.5C0 30.7652 0.105357 31.0196 0.292893 31.2071C0.48043 31.3946 0.734784 31.5 1 31.5H4C5.28705 31.5 5.28705 29.5 4 29.5H2C2 27.9087 2.63214 26.3826 3.75736 25.2574C4.88258 24.1321 6.4087 23.5 8 23.5C9.5913 23.5 11.1174 24.1321 12.2426 25.2574C13.3679 26.3826 14 27.9087 14 29.5H4C2.69343 29.5 2.7688 31.5 4 31.5H15C15.2652 31.5 15.5196 31.3946 15.7071 31.2071C15.8946 31.0196 16 30.7652 16 30.5V29.5C15.9985 27.9633 15.5545 26.4596 14.721 25.1685C13.8875 23.8775 12.6999 22.8539 11.3 22.22ZM5 18.5C5 17.9067 5.17595 17.3266 5.50559 16.8333C5.83524 16.3399 6.30377 15.9554 6.85195 15.7284C7.40013 15.5013 8.00333 15.4419 8.58527 15.5576C9.16721 15.6734 9.70176 15.9591 10.1213 16.3787C10.5409 16.7982 10.8266 17.3328 10.9424 17.9147C11.0581 18.4967 10.9987 19.0999 10.7716 19.6481C10.5446 20.1962 10.1601 20.6648 9.66671 20.9944C9.17336 21.3241 8.59334 21.5 8 21.5C7.20435 21.5 6.44129 21.1839 5.87868 20.6213C5.31607 20.0587 5 19.2956 5 18.5ZM29 1.5H17C16.2044 1.5 15.4413 1.81607 14.8787 2.37868C14.3161 2.94129 14 3.70435 14 4.5V10.5C14 11.2956 14.3161 12.0587 14.8787 12.6213C15.4413 13.1839 16.2044 13.5 17 13.5V15.5C17 15.6857 17.0517 15.8678 17.1493 16.0257C17.247 16.1837 17.3867 16.3114 17.5528 16.3944C17.7189 16.4775 17.9048 16.5126 18.0898 16.496C18.2748 16.4793 18.4514 16.4114 18.6 16.3L22.33 13.5H29C29.7956 13.5 30.5587 13.1839 31.1213 12.6213C31.6839 12.0587 32 11.2956 32 10.5V4.5C32 3.70435 31.6839 2.94129 31.1213 2.37868C30.5587 1.81607 29.7956 1.5 29 1.5ZM30 10.5C30 10.7652 29.8946 11.0196 29.7071 11.2071C29.5196 11.3946 29.2652 11.5 29 11.5H22C21.56 11.5 21.62 11.5 19 13.5V12.5C19 12.2348 18.8946 11.9804 18.7071 11.7929C18.5196 11.6054 18.2652 11.5 18 11.5H17C16.7348 11.5 16.4804 11.3946 16.2929 11.2071C16.1054 11.0196 16 10.7652 16 10.5V4.5C16 4.23478 16.1054 3.98043 16.2929 3.79289C16.4804 3.60536 16.7348 3.5 17 3.5H29C29.2652 3.5 29.5196 3.60536 29.7071 3.79289C29.8946 3.98043 30 4.23478 30 4.5V10.5Z"
                        fill="#eee"
                     />
                     <path
                        d="M19 8C18.8022 8 18.6089 7.94135 18.4444 7.83147C18.28 7.72159 18.1518 7.56541 18.0761 7.38268C18.0004 7.19996 17.9806 6.99889 18.0192 6.80491C18.0578 6.61093 18.153 6.43275 18.2929 6.29289C18.4327 6.15304 18.6109 6.0578 18.8049 6.01922C18.9989 5.98063 19.2 6.00043 19.3827 6.07612C19.5654 6.15181 19.7216 6.27998 19.8315 6.44443C19.9414 6.60888 20 6.80222 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8ZM23 8C22.8022 8 22.6089 7.94135 22.4444 7.83147C22.28 7.72159 22.1518 7.56541 22.0761 7.38268C22.0004 7.19996 21.9806 6.99889 22.0192 6.80491C22.0578 6.61093 22.153 6.43275 22.2929 6.29289C22.4327 6.15304 22.6109 6.0578 22.8049 6.01922C22.9989 5.98063 23.2 6.00043 23.3827 6.07612C23.5654 6.15181 23.7216 6.27998 23.8315 6.44443C23.9414 6.60888 24 6.80222 24 7C24 7.26522 23.8946 7.51957 23.7071 7.70711C23.5196 7.89464 23.2652 8 23 8ZM27 8C26.8022 8 26.6089 7.94135 26.4444 7.83147C26.28 7.72159 26.1518 7.56541 26.0761 7.38268C26.0004 7.19996 25.9806 6.99889 26.0192 6.80491C26.0578 6.61093 26.153 6.43275 26.2929 6.29289C26.4327 6.15304 26.6109 6.0578 26.8049 6.01922C26.9989 5.98063 27.2 6.00043 27.3827 6.07612C27.5654 6.15181 27.7216 6.27998 27.8315 6.44443C27.9414 6.60888 28 6.80222 28 7C28 7.26522 27.8946 7.51957 27.7071 7.70711C27.5196 7.89464 27.2652 8 27 8Z"
                        fill="#eee"
                     />
                  </g>
               </svg>
            </div>
            <div className="text__bloc relative bg-primaryPink flex flex-col gap-4 p-5 rounded-lg">
               <div className="text__block absolute max-w-350px] w-1/2">
                  <h1 className="text-white text-2xl">
                     Network settings and setup
                  </h1>
                  <button className="h-10 w-10 bg-[#ffffff44] flex justify-center items-center mt-3 rounded-[4px] duration-300 transition-colors hover:bg-[#ffffff55]">
                     <ChevronRight color="#ffffff" />
                  </button>
               </div>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/2 ml-auto"
                  fill="none"
                  viewBox="0 0 96 96"
                  id="wifi-router"
               >
                  <rect
                     width="82"
                     height="24"
                     x="7"
                     y="60"
                     stroke="#eee"
                     stroke-width="5"
                     rx="12"
                  ></rect>
                  <circle cx="34" cy="72" r="3" fill="#eee"></circle>
                  <circle cx="26" cy="72" r="3" fill="#eee"></circle>
                  <circle cx="18" cy="72" r="3" fill="#eee"></circle>
                  <path
                     stroke="#eee"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="5"
                     d="M73 31L73 60"
                  ></path>
                  <path
                     stroke="#eee"
                     stroke-linecap="round"
                     stroke-width="5"
                     d="M63 31C59.6513 27.5126 55.6758 24.7462 51.3005 22.8588 46.9252 20.9714 42.2358 20 37.5 20 32.7642 20 28.0748 20.9714 23.6995 22.8588 19.3242 24.7462 15.3487 27.5126 12 31M51 41C49.2272 39.0978 47.1225 37.5888 44.8061 36.5593 42.4898 35.5299 40.0072 35 37.5 35 34.9928 35 32.5102 35.5299 30.1939 36.5594 27.8775 37.5888 25.7728 39.0978 24 41"
                  ></path>
                  <circle cx="37.5" cy="49.5" r="3.5" fill="#eee"></circle>
                  <path
                     stroke="#eee"
                     stroke-linecap="round"
                     stroke-width="5"
                     d="M77 72H53"
                  ></path>
               </svg>
            </div>
         </div>
         <div className="w-1/2 flex flex-col gap-4">
            <div className="relative bg-primaryDarkGrey flex flex-col gap-4 p-5 rounded-lg">
               <div className="text__block absolute max-w-[350px] w-2/5">
                  <h1 className="text-white text-2xl">
                     Maintenance of computers and servers
                  </h1>
                  <button className="h-10 w-10 bg-[#ffffff44] transition-colors hover:bg-[#ffffff55] duration-300 flex justify-center items-center mt-3 rounded-[4px]">
                     <ChevronRight color="#ffffff" />
                  </button>
               </div>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3/5 ml-auto"
                  fill="none"
                  viewBox="0 0 96 96"
                  id="computer-tower"
               >
                  <path
                     stroke="#eee"
                     stroke-linecap="round"
                     stroke-width="5"
                     d="M36 19L59 19M36 28L59 28M32 84L32 87M63 84L63 87"
                  ></path>
                  <path
                     stroke="#eee"
                     stroke-width="5"
                     d="M61 9H34C29.5817 9 26 12.5817 26 17V76C26 80.4183 29.5817 84 34 84H61C65.4183 84 69 80.4183 69 76V60.4423V17C69 12.5817 65.4183 9 61 9Z"
                  ></path>
                  <circle cx="48" cy="74" r="3" fill="#eee"></circle>
               </svg>
            </div>
            <div className="relative bg-primaryBlue flex flex-col gap-4 p-5 rounded-lg">
               <div className="text__block absolute max-w-[350px] w-2/5">
                  <h1 className="text-white text-2xl">
                     Technical support and service
                  </h1>
                  <button className="h-10 w-10 bg-[#ffffff44] transition-colors hover:bg-[#ffffff55] duration-300 flex justify-center items-center mt-3 rounded-[4px]">
                     <ChevronRight color="#ffffff" />
                  </button>
               </div>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2/5 ml-auto"
                  fill="none"
                  viewBox="0 0 96 96"
                  id="audio"
               >
                  <path
                     stroke="#eee"
                     stroke-linecap="round"
                     stroke-width="5"
                     d="M68 68V75C68 78.3137 65.3137 81 62 81H53"
                  ></path>
                  <circle cx="52" cy="81" r="5" fill="#eee"></circle>
                  <path
                     stroke="#eee"
                     stroke-width="5"
                     d="M79 47V41C79 23.8792 65.1208 10 48 10V10C30.8792 10 17 23.8792 17 41V47M68 51.5455C68 49.0351 70.0351 47 72.5455 47H74.5C81.9558 47 88 53.0442 88 60.5V60.5C88 67.9558 81.9558 74 74.5 74H72.5455C70.0351 74 68 71.9649 68 69.4545V51.5455zM27 51.5455C27 49.0351 24.9649 47 22.4545 47H20.5C13.0442 47 7 53.0442 7 60.5V60.5C7 67.9558 13.0442 74 20.5 74H22.4545C24.9649 74 27 71.9649 27 69.4545V51.5455z"
                  ></path>
               </svg>
            </div>
         </div>
      </section>
   )
}

export default ServicesSection
