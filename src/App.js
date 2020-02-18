import React from "react";
import "./styles.css";
import { useSpring, animated } from "react-spring";

export default function App() {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	});

	const propsStroke = useSpring({ x: 100, from: { x: 0 } });

	return (
		<>
			<animated.h1 style={props}>hello</animated.h1>

			<animated.svg
				height="400"
				width="400"
				strokeDashoffset={propsStroke.x}
				stroke="blue"
				fill="white"
				fillOpacity="0.5"
				strokeOpacity="0.8"
			>
				<path
					d="M 192.000 212.000
						L 212.000 226.641
						L 209.321 202.000
						L 232.000 192.000
						L 209.321 182.000
						L 212.000 157.359
						L 192.000 172.000
						L 172.000 157.359
						L 174.679 182.000
						L 152.000 192.000
						L 174.679 202.000
						L 172.000 226.641
						z"
				/>
			</animated.svg>
		</>
	);
}
