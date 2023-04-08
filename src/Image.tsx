import React from "react"
import { useNearScreen } from "./hooks/useNearScreen"

interface Props {
	src: string
}

export const Image = ({src}: Props) => {
	const [isNear, fromRef] = useNearScreen({rootMargin: "0px"})
	return (
		<figure ref={fromRef}>
			{isNear && <img src={src} alt="lazy animal" />}
		</figure>
	)
}
