import { Context } from "../pages/Home";
import { useContext } from "react";
import ResetButton from "./ResetButton";
export default function Result() {
  const { conversionAmount }: { conversionAmount: ConversionResult } = useContext(Context)
  return (<>
    <main className="flex flex-col justify-evenly items-center border border-black border-2 p-6 space-y-6">
      <h3>From: {conversionAmount?.conversionObject?.original}</h3>
      <h3>To: {conversionAmount?.conversionObject?.convertedResult}</h3>
      <ResetButton />
    </main>
  </>)
}   
