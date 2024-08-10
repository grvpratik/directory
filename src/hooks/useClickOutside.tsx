import { useEffect, useRef } from "react";

type ClickOutsideHandler = (event: MouseEvent) => void;

/**
 * useClickOutside - A custom hook that detects clicks outside a specified element
 *
 * @param {ClickOutsideHandler} handler - The callback to execute when a click outside is detected
 * @returns {React.RefObject<HTMLElement>} ref - The ref to attach to the element you want to monitor
 */
function useClickOutside(handler: ClickOutsideHandler) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		/**
		 * Handles the click event to determine if it is outside the referenced element
		 * @param {MouseEvent} event - The click event
		 */
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler(event);
			}
		}

		// Attach the event listener to the document
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up the event listener on component unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handler]);

	return ref;
}

export default useClickOutside;
