import dynamic from "next/dynamic";

const KeyItemLog = dynamic(() => import("./KeyItemLogClientOnly"), {
  ssr: false,
});
export default KeyItemLog;
