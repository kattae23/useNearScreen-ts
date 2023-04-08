import React from "react"
import { Image } from "./Image"
import { useFetchApi } from "./hooks/useFetchApi"

const App = () => {

	const { gif, error, loading } = useFetchApi()

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
						? <h1 className="top-24 text-3xl font-bold text-green-500">Loading...</h1>
						: <>
							{gif.map((image, index) => (
								<Image key={index} src={image} />
							))}
						</>
				}
				{/* error here */}
				{
					error === null 
						? null
						: <h1>{error.message}</h1>
				}
			</div>
		</div>
	)
}

export default App
