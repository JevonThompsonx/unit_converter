import { Context } from "../pages/Home";
import { useContext } from "react";
export default function Result() {
  const { conversionAmount }: { conversionAmount: SubmitResults } = useContext(Context)
  return (<>
    <h1>Results are in...</h1>
    <h3>{conversionAmount.conversionObject.convertedResult}</h3>
  </>)
}   
