import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class App extends React.PureComponent {
	state = { blocks: [] }

	render() {
		return (
			<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
				<div>
					<button onClick={this.handleNewBlock}>new block</button>
				</div>
				<div style={{ display: "flex" }}>
					{this.state.blocks.map(({ id, height, width, left, top }) => (
						<div
							key={id}
							style={{
								position: "absolute",
								border: "1px solid black",
								height,
								width,
								left,
								top,
							}}
						/>
					))}
				</div>
			</div>
		)
	}

	handleNewBlock = () => {
		const { blocks } = this.state
		const newBlock = {
			id: Math.random(),
			width: 100,
			height: 100,
			left: window.innerWidth / 2 - 50,
			top: window.innerHeight / 2 - 50,
		}
		this.setState({ blocks: [...blocks, newBlock] })
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
