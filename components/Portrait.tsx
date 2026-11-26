import Image from "next/image";

export function Portrait() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/Close Up.png"
        alt="Potret Moch. Anang Ardiansyah"
        width={1024}
        height={1024}
        priority
        className="h-full w-full object-contain object-bottom [filter:drop-shadow(0_18px_30px_rgba(80,40,10,0.12))]"
      />
    </div>
  );
}
