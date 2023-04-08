import { useState, useRef, useEffect } from "react"

type UseNearScreenReturnType = [boolean, React.MutableRefObject<HTMLElement | null>];

export const useNearScreen = ({ rootMargin = "0px" } = {}): UseNearScreenReturnType => {
	const [isNear, setIsNear] = useState<boolean>(false)
	const el = useRef(null)

	useEffect(
		function() {
			if (typeof el.current === "undefined") return

			let observer: IntersectionObserver
			Promise.resolve(
				typeof window.IntersectionObserver !== "undefined"
					? window.IntersectionObserver
					: import("intersection-observer")
			).then(() => {
				const onIntersect: IntersectionObserverCallback = (entries, observer) => {
					const { isIntersecting } = entries[0]

					if (isIntersecting) {
						setIsNear(true)
						observer.disconnect()
					}
				}

				observer = new window.IntersectionObserver(onIntersect, { rootMargin })
				if(el.current){
					observer.observe(el.current)
				}
			})

			return () => observer && observer.disconnect()
		},
		[el, rootMargin]
	)

	return [isNear, el]
}
