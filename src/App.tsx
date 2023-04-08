import React from "react"
import { Image } from "./Image"
import { useFetchApi } from "./hooks/useFetchApi"
import { Loading } from "./components/Loading"

const App = () => {

	const { gif, error, loading } = useFetchApi()

	console.log({gif,error,loading})

	return (
		<div className="w-full flex items-center justify-center">
			<div className="App">
				<header>
					<h2 className="text-4xl text-orange-600">
          useNearScreen{"TS"}
						<span role="img">
            ⚛️
						</span>
					</h2>
					<h5 className="text-xl font-bold"> por @kattae23</h5>
				</header>

				{
					loading 
						? <Loading />
						: <>
							{gif.map((image, index) => (
								<Image key={index} src={image} />
							))}
						</>
				}
			</div>
		</div>
	)
}

export default App
