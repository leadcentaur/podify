import { render } from "@testing-library/react"
import {ClipLoader} from "react-spinners";

export default function ErrorView() {
    return (
		<div className="bg-gradient-to-b from-slate-900 to-slate-600 star-pattern rounded-lg p-2 bg-blue-600 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0">
			<h1 className="text-3xl p-3 text-white">Unable to retrieve the podcasts.</h1>
		</div>
	);
}