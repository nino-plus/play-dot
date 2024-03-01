import React from 'react';

export default function Page() {
  return <div>Page</div>;
}

// 'use client';

// import { useRouter } from 'next/navigation';
// import useLocalStorageState from 'use-local-storage-state';
// import { Howl } from 'howler';

// const basePath = process.env.REPOSITORY_NAME || '';

// export default function Home() {
//   const router = useRouter();
//   const resolution = 20;
//   const clearSound = new Howl({
//     src: [`${basePath}/sounds/clear.mp3`],
//     volume: 0.1,
//   });

//   return (
//     <main className="h-dvh bg-black">
//       <div className="aspect-[9/16] flex items-center bg-gradient-to-tr from-zinc-200 to-zinc-100 p-8 mx-auto relative h-full">
//         <div
//           style={{
//             gridTemplateColumns: `repeat(${resolution},minmax(0,1fr))`,
//           }}
//           className="aspect-square w-full grid grid-cols-[repeat(10,minmax(0,1fr))] gap-px"
//         >
//           {[...Array(resolution * resolution)].map((_, i) => (
//             <Dot i={i} key={i} />
//           ))}
//         </div>
//         <button
//           className="absolute bottom-4 text-sm p-2 left-4 text-zinc-500"
//           onClick={() => {
//             localStorage.clear();
//             router.refresh();
//             clearSound.play();
//           }}
//         >
//           CLEAR
//         </button>
//       </div>
//     </main>
//   );
// }

// function Dot({ i }: { i: number }) {
//   const [active, setActive] = useLocalStorageState(String(i), {
//     defaultValue: false,
//   });
//   const inSound = new Howl({ src: [`${basePath}/sounds/in.mp3`], volume: 0.1 });
//   const outSound = new Howl({
//     src: [`${basePath}/sounds/out.mp3`],
//     volume: 0.1,
//   });

//   return (
//     <button
//       onClick={() => {
//         active ? outSound.play() : inSound.play();

//         setActive(!active);
//       }}
//       aria-pressed={active}
//       className="aspect-square group bg-black/5 relative"
//     >
//       <div className="duration-500 group-aria-pressed:scale-100 transition size-full opacity-0 group-aria-pressed:opacity-100 scale-75 bg-zinc-600" />
//     </button>
//   );
// }
