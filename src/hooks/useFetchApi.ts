import { useEffect, useState } from "react"

interface GifData {
    images: {
      downsized_medium: {
        url: string
      }
    }
  }

export const useFetchApi = () => {

	const [gif, setGif] = useState<string[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	const apiKey = import.meta.env.VITE_API_KEY

	const query = "dogs"

	const limit = 20

	useEffect(() => {

		fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}`)
			.then((res: Response) => res.json())
			.then((res: { data: GifData[] }) => {
				const img = res.data.map((data: GifData) => data.images.downsized_medium.url)
				setGif(img)
			})
			.catch((error: Error) => setError(error))
			.finally(() => setLoading(false))
          
	}, [])
    
	return {
		gif,
		loading,
		error
	}

}
